pico-8 cartridge // http://www.pico-8.com
version 18
__lua__

#include models/oxygene.lua
--#include models/tunnel01.lua
#include triangle.lua
#include 3d.lua
#include misc.lua

function _init()
	poke(0x5f34, 1)
  --angles = {0, 0.25, 0}
  angles = {-0.2, 0.01, 0}
  offset = {0, 0, 30}
  --model = tunnel01.Cube
  model = oxygene.Text
  speed = 0.1
end

function _update()
  if btn(0) then
    offset[1] -= speed
  elseif btn(1) then
    offset[1] += speed
  elseif btn(2) then
    offset[2] += speed
  elseif btn(3) then
    offset[2] -= speed
  elseif btn(4) then
    offset[3] -= speed
  elseif btn(5) then
    offset[3] += speed
  end
end

function _draw()
  cls()
  camera(-64,-64)
  m3d_shaded(model.v, model.f, angles, 1, offset)

  oprint(stat(1), -64, -56, 7)
  oprint(offset[3], -64, 0, 7)
end

__gfx__
00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00700700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00077000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00077000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00700700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
