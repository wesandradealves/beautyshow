import{a as c}from"./_getAllKeys.6f3be0f6.js";import{S as i,a as p,k as m}from"./isArrayLikeObject.7cab3d31.js";var u=i?i.isConcatSpreadable:void 0;function _(n){return p(n)||m(n)||!!(u&&n&&n[u])}function l(n,t,r,a,o){var e=-1,f=n.length;for(r||(r=_),o||(o=[]);++e<f;){var s=n[e];t>0&&r(s)?t>1?l(s,t-1,r,a,o):c(o,s):a||(o[o.length]=s)}return o}function b(n){var t=n==null?0:n.length;return t?l(n,1):[]}function h(n){return n===void 0}export{l as b,b as f,h as i};
