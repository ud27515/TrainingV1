(function(root){'use strict';
const KEY='study-trail-v1',RECOVERY=KEY+'-before-restore';
function create(storage,validate){
 function inspect(){const raw=storage.getItem(RECOVERY);if(raw===null)return null;const item=JSON.parse(raw);if(!item||typeof item.raw!=='string'||!Number.isFinite(item.at))throw Error('退避記録の形式を読み取れません。');let state=null;try{state=validate(JSON.parse(item.raw));}catch(_){}return {...item,state};}
 function replace(next,at=Date.now()){
  const checked=validate(JSON.parse(JSON.stringify(next))),previous=storage.getItem(KEY);
  // Preserve even unreadable originals before overwriting. If this fails, do not replace.
  if(previous!==null)storage.setItem(RECOVERY,JSON.stringify({raw:previous,at}));
  storage.setItem(KEY,JSON.stringify(checked));return checked;
 }
 function undo(at=Date.now()){const item=inspect();if(!item?.state)throw Error('この退避記録は復元できません。ファイルで救出してください。');return replace(item.state,at);}
 return {inspect,replace,undo};
}
root.TrailStorage={create,KEY,RECOVERY};
})(typeof window==='undefined'?globalThis:window);
