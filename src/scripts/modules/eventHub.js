export const evtHub = setEvtHub();

function setEvtHub () {
  let events = {};
  let evtObject = {
    on (evtName, callback) {
      let isValidInput = typeof evtName === 'string' && typeof callback === 'function';
      
      if (isValidInput) {
        events[evtName] = events[evtName] || [];	
        events[evtName].push(callback);
      } else {
        throw new Error(`Something's wrong with event name: "${evtName}" or function: "${callback}"`);
      }
    },
    
    off (evtName) {
      if (events[evtName]) {
        delete events[evtName];
      }
    },

    trigger (evtName, evtData) {
      if (events[evtName]) {
        evtData = evtData || null;
        events[evtName].forEach(callback => callback(evtData));
      } else {
        throw new Error(`Event: "${evtName}" not found`);
      }
    }
  };
  
  return Object.freeze(evtObject);
}