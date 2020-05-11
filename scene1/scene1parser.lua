local sceneFile = io.open("scene1.bin", "rb")
local readBytes = 0

-- Read single byte
local function readByte()
  local b = string.byte(sceneFile:read(1))
  readBytes = readBytes + 1
  return b
end

-- Read word (2 bytes)
local function readWord()
  local h = readByte()
  local l = readByte()
  return h * 256 + l
end

-- Read frames
local function readFrames(framesCount)
  local frames = {}

  for frame = 1, framesCount do
    -- Read frame
    local frameFlags = readByte()
    local needCls = (frameFlags & 1) ~= 0
    local hasPalette = (frameFlags & 2) ~= 0
    local indexedFrame = (frameFlags & 4) ~= 0

    local palette = {}
    if hasPalette then
      -- Read palette
      local bitMask = readWord()
      for c = 15, 0, -1 do
        if bitMask & (1 << c) ~= 0 then
          local color = readWord()
          palette[16 - c] = {r = color >> 8, g = color >> 4 & 7, b = color & 7}
        end
      end

      --[[print("Palette:")
      for k,v in pairs(palette) do
        print(k,v.r, v.g, v.g)
      end]]
    end

    local vertices = {}
    if indexedFrame then
      -- Frame with indexed vertices
      local verticesCount = readByte()
      for c = 1, verticesCount do
        local x = readByte()
        local y = readByte()
        table.insert(vertices, {x = x, y = y})
      end
    end

    local endOfFrame = false
    local polyDescriptor
    local polys = {}
    -- Read polygons
    repeat
      polyDescriptor = readByte()
      if polyDescriptor >= 253 then
        endOfFrame = true
        break
      end

      local polyColor = polyDescriptor >> 4
      local polyVerticesCount = polyDescriptor & 15

      local poly = {polyColor + 1}
      if indexedFrame then
        for c = 1, polyVerticesCount do
          local vidx = readByte()
          table.insert(poly, vidx + 1)
        end
      else
        for c = 1, polyVerticesCount do
          local x = readByte()
          local y = readByte()
          table.insert(poly, {x = x, y = y})
        end
      end

      table.insert(polys, poly)

    until endOfFrame

    if polyDescriptor == 254 then
      -- Skip to the next 64k block
      local blockNumber = math.floor(readBytes / 65536)
      local nextBlockBytes = (blockNumber + 1) * 65536
      local toSkip = nextBlockBytes - readBytes
      for c = 1, toSkip do
        readByte()
      end
    end

    local frame = {polys = polys}
    if hasPalette then
      frame.palette = palette
    end

    if indexedFrame then
      frame.vertices = vertices
    end

    table.insert(frames, frame)
  end

  return frames
end

-- Save frames
local function saveFrames(frames, filename)
  local output = io.open(filename, "wb")
  output:write("local frames = {\n")

  for i, frame in ipairs(frames) do
    output:write("-- Frame " .. i .. "\n{\n")
    if frame.palette ~= nil then
      output:write("  palette = {")

      for color, rgb in pairs(frame.palette) do
        output:write("[" ..color .. "] = {" .. rgb.r .. "," .. rgb.g .. "," .. rgb.b .. "}, ")
      end

      output:write("},\n")
    end

    local indexed = frame.vertices ~= nil

    if indexed then
      output:write("  vertices = {")

      for i, v in ipairs(frame.vertices) do
        output:write("{" .. v.x .. "," .. v.y .. "}, ")
      end

      output:write("},\n")
    end

    output:write("  polys = {\n")
    for i, poly in ipairs(frame.polys) do
      output:write("    {")
      -- Poly vertices
      for i, v in ipairs(poly) do
        if i == 1 then
          -- Color
          output:write(v .. ",  ")
        else
          if indexed then
            output:write(v .. ",")
          else
            output:write("{" .. v.x .. "," .. v.y .. "},")
          end
        end
      end

      output:write("},\n")
    end

    output:write("  }\n")

    output:write("},\n")
  end
  output:write("}\n")
  output:close()
end

local frames = readFrames(1800)
saveFrames(frames, "scene1frames.lua")
