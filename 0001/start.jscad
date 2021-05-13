// title      : OpenJSCAD first attempt
// author     : Andrey G. Rannev
// license    : MIT License
// revision   : 0.001
// tags       : 
// file       : start.jscad

// Первый опыт построения 3D модели
// https://en.wikibooks.org/wiki/OpenJSCAD_User_Guide

function main() {
   return union(

         sphere({r:2, center: true, fn: 100 }).translate([0,0,2])

   ).translate([0,0,0]).scale(1);
}
