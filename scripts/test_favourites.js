// Test: favourites array in localStorage should be converted to Set on load
// Simulates the fixed loadState logic outside the browser.

const STORE_KEY='garden.state.v2';

function loadState(storedJSON){
  try{
    const raw=JSON.parse(storedJSON||'{}');
    return {
      favourites:new Set(raw.favourites||[]),
      recent:raw.recent||[],
      notes:raw.notes||{},
      streak:raw.streak||0,
      lastVisit:raw.lastVisit||null
    };
  }catch{
    return {favourites:new Set(),recent:[],notes:{},streak:0,lastVisit:null};
  }
}

// Scenario A: localStorage has favourites as array (the bug trigger)
const stateA=loadState(JSON.stringify({favourites:['rag-fundamental','langchain-deep'],recent:['rag-fundamental']}));
console.log('Scenario A (array in storage):');
console.log('  has rag-fundamental?', stateA.favourites.has('rag-fundamental'));
console.log('  has missing?', stateA.favourites.has('missing'));
console.log('  size?', stateA.favourites.size);
console.log('  is Set?', stateA.favourites instanceof Set);

// Scenario B: localStorage has no state (first visit)
const stateB=loadState('{}');
console.log('Scenario B (empty storage):');
console.log('  size?', stateB.favourites.size);
console.log('  is Set?', stateB.favourites instanceof Set);

// Scenario C: localStorage has favourites as Set string (not possible in JSON, but defensive)
const stateC=loadState(JSON.stringify({favourites:null}));
console.log('Scenario C (favourites null):');
console.log('  size?', stateC.favourites.size);
console.log('  is Set?', stateC.favourites instanceof Set);

// Assertions
let ok=true;
ok=ok && stateA.favourites.has('rag-fundamental')===true;
ok=ok && stateA.favourites.has('missing')===false;
ok=ok && stateA.favourites.size===2;
ok=ok && stateA.favourites instanceof Set===true;
ok=ok && stateB.favourites.size===0;
ok=ok && stateC.favourites.size===0;
console.log('');
console.log(ok?'✓ All tests passed':'✗ Some tests failed');
process.exit(ok?0:1);
