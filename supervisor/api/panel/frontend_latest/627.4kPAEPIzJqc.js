export const id=627;export const ids=[627];export const modules={86188:(e,i,t)=>{t.d(i,{M:()=>a,l:()=>s});t(24545),t(51855),t(82130),t(31743),t(22328),t(4959),t(62435);const s=new Set(["primary","accent","disabled","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white"]);function a(e){return s.has(e)?`var(--${e}-color)`:e}},18409:(e,i,t)=>{t.d(i,{s:()=>s});const s=(e,i,t=!1)=>{let s;const a=(...a)=>{const l=t&&!s;clearTimeout(s),s=window.setTimeout((()=>{s=void 0,t||e(...a)}),i),l&&e(...a)};return a.cancel=()=>{clearTimeout(s)},a}},70627:(e,i,t)=>{var s=t(36312),a=(t(253),t(2075),t(54846),t(50289)),l=t(29818),o=t(66066),d=t(94100),n=t(86188),r=t(34897),c=t(2682),u=t(21668),h=t(20712);const b=()=>Promise.all([t.e(8722),t.e(963),t.e(6225),t.e(5269)]).then(t.bind(t,75269)),v=(e,i)=>{(0,r.r)(e,"show-dialog",{dialogTag:"dialog-label-detail",dialogImport:b,dialogParams:i})};t(74455),t(24793),t(24545),t(51855),t(82130),t(31743),t(22328),t(4959),t(62435),t(5186),t(16891),t(4525);var k=t(85323),_=t(213),p=t(55792),m=t(66754);t(43536),t(4169),t(13830),t(88400);const y="___ADD_NEW___",f="___NO_LABELS___",g="___ADD_NEW_SUGGESTION___",x=e=>a.qy`<ha-list-item graphic="icon" class="${(0,k.H)({"add-new":e.label_id===y})}"> ${e.icon?a.qy`<ha-icon slot="graphic" .icon="${e.icon}"></ha-icon>`:a.s6} ${e.name} </ha-list-item>`;(0,s.A)([(0,l.EM)("ha-label-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:()=>!1},{kind:"field",decorators:[(0,l.MZ)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Array,attribute:"exclude-label"})],key:"excludeLabels",value:void 0},{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,l.wk)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,l.wk)()],key:"_labels",value:void 0},{kind:"field",decorators:[(0,l.P)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_suggestion",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"method",key:"open",value:async function(){await this.updateComplete,await(this.comboBox?.open())}},{kind:"method",key:"focus",value:async function(){await this.updateComplete,await(this.comboBox?.focus())}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,u.o5)(this.hass.connection,(e=>{this._labels=e}))]}},{kind:"field",key:"_getLabels",value(){return(0,d.A)(((e,i,t,s,a,l,o,d,n,r,c)=>{let u,h,b={};(a||l||o||d||n)&&(b=(0,m.g2)(s),u=t,h=s.filter((e=>e.labels.length>0)),a&&(u=u.filter((e=>{const i=b[e.id];return!(!i||!i.length)&&b[e.id].some((e=>a.includes((0,_.m)(e.entity_id))))})),h=h.filter((e=>a.includes((0,_.m)(e.entity_id))))),l&&(u=u.filter((e=>{const i=b[e.id];return!i||!i.length||s.every((e=>!l.includes((0,_.m)(e.entity_id))))})),h=h.filter((e=>!l.includes((0,_.m)(e.entity_id))))),o&&(u=u.filter((e=>{const i=b[e.id];return!(!i||!i.length)&&b[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&o.includes(i.attributes.device_class))}))})),h=h.filter((e=>{const i=this.hass.states[e.entity_id];return i.attributes.device_class&&o.includes(i.attributes.device_class)}))),d&&(u=u.filter((e=>d(e)))),n&&(u=u.filter((e=>{const i=b[e.id];return!(!i||!i.length)&&b[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&n(i)}))})),h=h.filter((e=>{const i=this.hass.states[e.entity_id];return!!i&&n(i)}))));let v=e;const k=new Set;let p;return u&&(p=u.filter((e=>e.area_id)).map((e=>e.area_id)),u.forEach((e=>{e.labels.forEach((e=>k.add(e)))}))),h&&(p=(p??[]).concat(h.filter((e=>e.area_id)).map((e=>e.area_id))),h.forEach((e=>{e.labels.forEach((e=>k.add(e)))}))),p&&p.forEach((e=>{i[e].labels.forEach((e=>k.add(e)))})),c&&(v=v.filter((e=>!c.includes(e.label_id)))),(u||h)&&(v=v.filter((e=>k.has(e.label_id)))),v.length||(v=[{label_id:f,name:this.hass.localize("ui.components.label-picker.no_match"),icon:null,color:null,description:null,created_at:0,modified_at:0}]),r?v:[...v,{label_id:y,name:this.hass.localize("ui.components.label-picker.add_new"),icon:"mdi:plus",color:null,description:null,created_at:0,modified_at:0}]}))}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass&&this._labels||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getLabels(this._labels,this.hass.areas,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeLabels).map((e=>({...e,strings:[e.label_id,e.name]})));this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){return a.qy` <ha-combo-box .hass="${this.hass}" .helper="${this.helper}" item-value-path="label_id" item-id-path="label_id" item-label-path="name" .value="${this._value}" .disabled="${this.disabled}" .required="${this.required}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.label-picker.label"):this.label}" .placeholder="${this.placeholder?this._labels?.find((e=>e.label_id===this.placeholder))?.name:void 0}" .renderer="${x}" @filter-changed="${this._filterChanged}" @opened-changed="${this._openedChanged}" @value-changed="${this._labelChanged}"> </ha-combo-box> `}},{kind:"method",key:"_filterChanged",value:function(e){const i=e.target,t=e.detail.value;if(!t)return void(this.comboBox.filteredItems=this.comboBox.items);const s=(0,p.H)(t,i.items?.filter((e=>![f,y].includes(e.label_id)))||[]);0===s.length?this.noAdd?this.comboBox.filteredItems=[{label_id:f,name:this.hass.localize("ui.components.label-picker.no_match"),icon:null,color:null}]:(this._suggestion=t,this.comboBox.filteredItems=[{label_id:g,name:this.hass.localize("ui.components.label-picker.add_new_sugestion",{name:this._suggestion}),icon:"mdi:plus",color:null}]):this.comboBox.filteredItems=s}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_labelChanged",value:function(e){e.stopPropagation();let i=e.detail.value;if(i===f)return i="",void this.comboBox.setInputValue("");[g,y].includes(i)?(e.target.value=this._value,this.hass.loadFragmentTranslation("config"),v(this,{entry:void 0,suggestedName:i===g?this._suggestion:"",createEntry:async e=>{const i=await(0,u._9)(this.hass,e),t=[...this._labels,i];return this.comboBox.filteredItems=this._getLabels(t,this.hass.areas,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeLabels),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(i.label_id),i}}),this._suggestion=void 0,this.comboBox.setInputValue("")):i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,r.r)(this,"value-changed",{value:e}),(0,r.r)(this,"change")}),0)}}]}}),(0,h.E)(a.WF)),(0,s.A)([(0,l.EM)("ha-labels-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:()=>!1},{kind:"field",decorators:[(0,l.MZ)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Array,attribute:"exclude-label"})],key:"excludeLabels",value:void 0},{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,l.wk)()],key:"_labels",value:void 0},{kind:"field",decorators:[(0,l.P)("ha-label-picker",!0)],key:"labelPicker",value:void 0},{kind:"method",key:"open",value:async function(){await this.updateComplete,await(this.labelPicker?.open())}},{kind:"method",key:"focus",value:async function(){await this.updateComplete,await(this.labelPicker?.focus())}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,u.o5)(this.hass.connection,(e=>{const i={};e.forEach((e=>{i[e.label_id]=e})),this._labels=i}))]}},{kind:"field",key:"_sortedLabels",value:()=>(0,d.A)(((e,i,t)=>e?.map((e=>i?.[e])).sort(((e,i)=>(0,c.x)(e?.name||"",i?.name||"",t)))))},{kind:"method",key:"render",value:function(){const e=this._sortedLabels(this.value,this._labels,this.hass.locale.language);return a.qy` ${e?.length?a.qy`<ha-chip-set> ${(0,o.u)(e,(e=>e?.label_id),(e=>{const i=e?.color?(0,n.M)(e.color):void 0;return a.qy` <ha-input-chip .item="${e}" @remove="${this._removeItem}" @click="${this._openDetail}" .label="${e?.name}" selected="selected" style="${i?`--color: ${i}`:""}"> ${e?.icon?a.qy`<ha-icon slot="icon" .icon="${e.icon}"></ha-icon>`:a.s6} </ha-input-chip> `}))} </ha-chip-set>`:a.s6} <ha-label-picker .hass="${this.hass}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.label-picker.add_label"):this.label}" .placeholder="${this.placeholder}" .excludeLabels="${this.value}" @value-changed="${this._labelChanged}"> </ha-label-picker> `}},{kind:"get",key:"_value",value:function(){return this.value||[]}},{kind:"method",key:"_removeItem",value:function(e){const i=e.currentTarget.item;this._setValue(this._value.filter((e=>e!==i.label_id)))}},{kind:"method",key:"_openDetail",value:function(e){const i=e.currentTarget.item;v(this,{entry:i,updateEntry:async e=>await(0,u.Rp)(this.hass,i.label_id,e)})}},{kind:"method",key:"_labelChanged",value:function(e){e.stopPropagation();const i=e.detail.value;i&&!this._value.includes(i)&&(this._setValue([...this._value,i]),this.labelPicker.value="")}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,r.r)(this,"value-changed",{value:e}),(0,r.r)(this,"change")}),0)}},{kind:"field",static:!0,key:"styles",value:()=>a.AH`ha-chip-set{margin-bottom:8px}ha-input-chip{--md-input-chip-selected-container-color:var(--color, var(--grey-color));--ha-input-chip-selected-container-opacity:0.5;--md-input-chip-selected-outline-width:1px}`}]}}),(0,h.E)(a.WF))},21668:(e,i,t)=>{t.d(i,{Rp:()=>c,_9:()=>r,o5:()=>n});var s=t(84280),a=t(2682),l=t(18409);const o=e=>e.sendMessagePromise({type:"config/label_registry/list"}).then((e=>e.sort(((e,i)=>(0,a.x)(e.name,i.name))))),d=(e,i)=>e.subscribeEvents((0,l.s)((()=>o(e).then((e=>i.setState(e,!0)))),500,!0),"label_registry_updated"),n=(e,i)=>(0,s.N)("_labelRegistry",o,d,e,i),r=(e,i)=>e.callWS({type:"config/label_registry/create",...i}),c=(e,i,t)=>e.callWS({type:"config/label_registry/update",label_id:i,...t})},20712:(e,i,t)=>{t.d(i,{E:()=>o});var s=t(36312),a=t(68689),l=t(29818);const o=e=>(0,s.A)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,a.A)(t,"connectedCallback",this,3)([]),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,a.A)(t,"disconnectedCallback",this,3)([]),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,a.A)(t,"updated",this,3)([e]),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const i of e.keys())if(this.hassSubscribeRequiredHostProps.includes(i))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&!this.hassSubscribeRequiredHostProps?.some((e=>void 0===this[e]))&&(this.__unsubs=this.hassSubscribe())}}]}}),e)}};
//# sourceMappingURL=627.4kPAEPIzJqc.js.map