(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{PtSb:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("KUDs"),c=n("EcEN"),r=n("FrJb"),i=n("x3IP"),s=n("CcnG"),u=r.a,a=function(){function e(e){var t=this;this.playerServiceService=e,this.db=new u("fifteen_db_points"),this.playerServiceService.getPlayer().subscribe(function(e){e instanceof o.a&&(t.player=e)})}return e.prototype.getTopPlayers=function(e){return this.db.allDocs({include_docs:!0,descending:!0}).then(function(t){return t.rows.length>0?t.rows.sort(function(e,t){return e.doc.moves-t.doc.moves}).slice(0,e).map(function(e){var t=e.doc;return new o.b(t._id,t.moves,t.time,t.player_id,t.player)}):[]}).catch(function(e){console.log(e)})},e.prototype.setNewResult=function(e,t){var n=this,c="";return this.db.allDocs({include_docs:!0,descending:!0}).then(function(r){(c=n.isPointsHaveToBeUpdated(r.rows,e,t))&&(n.points=new o.b(c,e,t,n.player._id,n.player),n.updatePlayerResults(n.points,c))}).catch(function(e){console.log(e)})},e.prototype.updatePlayerResults=function(e,t){return void 0===t&&(t=""),this.db.put(e).then(function(e){return console.log("Successfully posted !",e),e}).catch(function(e){console.log(e)})},e.prototype.isPointsHaveToBeUpdated=function(e,t,n){for(var o=0;o<e.length;o++){var r=e[o].doc;if(r.player_id===this.player._id)return t<r.moves||n<r.time?(this.db.remove(r),r._id):""}return Object(c.v4)()},e.prototype.createTestDb=function(){for(var e=[],t=0;t<15;t++)e.push(new o.b(Object(c.v4)(),t,t+25,Object(c.v4)()));this.db.bulkDocs(e).then(function(e){console.log("Successfully posted !",e)}).catch(function(e){console.log(e)})},e.ngInjectableDef=s.T({factory:function(){return new e(s.X(i.a))},token:e,providedIn:"root"}),e}()}}]);