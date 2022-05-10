
var obj = {
  prop: 37,
  func: function() {
    return this.prop;
  }
};

let koukou = obj.func;
koukou();

class C2 {
   constructor() {
      this.a = 37;
   }
}

o = new C2();
o.a;
