// title      : OpenJSCAD first attempt
// author     : Andrey G. Rannev
// license    : MIT License
// revision   : 0.001
// tags       : 
// file       : start.jscad

// Первый опыт построения 3D модели

function main() {
   return union(
      difference(
         cube({size: 3, center: true}),
         sphere({r:2, center: true})
      ),
      intersection(
          sphere({r: 1.3, center: true}),
          cube({size: 2.1, center: true})
      )
   ).translate([0,0,0]).scale(1);
}
