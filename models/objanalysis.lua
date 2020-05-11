local inspect = require("inspect")
local M = {}

function M.countStorage(objs)
  local vertices, faces = M.stats(objs)

  local vBytes = vertices * 3
  local fBytes = vertices * 4

  print("Uncompressed bytes for vertices: " .. vBytes)
  print("Uncompressed bytes for faces: " .. fBytes)
  print("Total: " .. (vBytes + fBytes))
end

function M.stats(objs)
  local vertices = 0
  local faces = 0

  for k, obj in pairs(objs) do
    vertices = vertices + #obj.v
    faces = faces + #obj.f
  end

  print("Total vertices: " .. vertices)
  print("Total faces: " .. faces)

  return vertices, faces
end

function M.facePatterns(objs)
  local patterns = {}

  -- Iterate through objects
  for name, obj in pairs(objs) do
    -- Iterate through object faces
    for i, face in ipairs(obj.f) do
      local ptn = (face[2] - face[1]) .. ":" .. (face[3] - face[1])
      if patterns[ptn] == nil then
        patterns[ptn] = 1
      else
        patterns[ptn] = patterns[ptn] + 1
      end
    end
  end

  --[[local ptncsv = io.open("patterns.csv", "wb")
  for ptn, count in pairs(patterns) do
    ptncsv:write(count .. "," .. ptn .. ",\n")
  end
  ptncsv:close()]]

  --print(inspect(patterns))
end


return M