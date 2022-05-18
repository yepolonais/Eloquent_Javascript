/** RETRY */

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  try{
     var result = primitiveMultiply(a, b);
  }
  catch (e)
  {
     if (e instanceof MultiplicatorUnitFailure)
     {
        return reliableMultiply(a, b);
     }
     else{
        throw e;
     }

  }
  return result;
}

reliableMultiply(8, 8);
// reliableMultiply(8, 7);
// reliableMultiply(8, 4);

/** THE LOCKED BOX */

const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(action) {
  box.unlock();
  try{
     action();
  }
  catch (e){
     throw e;
  }
  finally{
     box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
box.locked;
box.unlock();
box.content;
