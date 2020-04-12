(this.webpackJsonpalgorithms=this.webpackJsonpalgorithms||[]).push([[0],{56:function(e,t,a){e.exports=a(70)},61:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),C=a(14),D=a.n(C),S=(a(61),a(20)),l=a(103),H=a(93),o=a(92),c=a(35),i=Object(l.a)(o.a)({display:"flex",justifyContent:"space-around"}),m=function(e){var t=e.name;return r.a.createElement(S.b,{to:"/"+t.toLowerCase().replace(/ /g,"")},r.a.createElement(c.a,{color:"primary"},t))},s=function(){return r.a.createElement(H.a,{position:"static",color:"transparent"},r.a.createElement(i,null,r.a.createElement(S.b,{to:"/"},r.a.createElement(c.a,null,"Home")),r.a.createElement(m,{name:"Binary Tree"}),r.a.createElement(m,{name:"Algorithms"}),r.a.createElement(m,{name:"Taxes"}),r.a.createElement(m,{name:"Birthdays"}),r.a.createElement(m,{name:"Colors"})))},u=a(15),d=a(46),h=a.n(d),A=a(102),T=a(101),f=a(94),p=a(49),J=a(95),K=function(e){var t=e.name,a=e.problem,n=e.algorithm,C=e.method,D=e.testCases;return r.a.createElement(A.a,null,r.a.createElement(T.a,{expandIcon:r.a.createElement(h.a,null)},r.a.createElement(c.a,{color:"textPrimary",variant:"h5"},t)),r.a.createElement(f.a,null,r.a.createElement(J.a,{container:!0,spacing:2},r.a.createElement(J.a,{item:!0,xs:12,name:"Problem"},r.a.createElement(p.a,{elevation:3,rounded:!0,style:{padding:"15px"}},r.a.createElement(c.a,{color:"primary",variant:"h6"},"Problem"),r.a.createElement(c.a,{color:"textSecondary",style:{whiteSpace:"pre-line"}},a))),r.a.createElement(J.a,{item:!0,xs:12,name:"Algorithm"},r.a.createElement(p.a,{elevantion:3,style:{padding:"15px"}},r.a.createElement(c.a,{variant:"h6"},"Algorithm"),r.a.createElement(c.a,{variant:"body2",color:"textSecondary",style:{whiteSpace:"pre-line"}},n))),r.a.createElement(J.a,{item:!0,xs:12,name:"Method"},r.a.createElement(p.a,{elevantion:3,style:{padding:"15px"}},r.a.createElement(c.a,{variant:"h6"},"Method"),r.a.createElement(c.a,{variant:"body2",color:"textSecondary",style:{whiteSpace:"pre-line"}},C.toString()))),r.a.createElement(J.a,{item:!0,xs:12,name:"testcases"},r.a.createElement(p.a,{elevantion:3,style:{padding:"15px"}},r.a.createElement(c.a,{variant:"h6"},"Test Cases"),D.map((function(e){return r.a.createElement("div",null,e.toString(),"==> ",C(e).toString())})))))))};var y={name:"Best Trade",problem:"Input is an array of Integers which denotes the stock value of company X.\n\nEx : [1,5,6,7,34,10]\n\nIn this case :\n1 is the stock value of company X on Day 0.\n5 is the stock value of company X on Day 1.\n...\n10 is the stock value of a comany X on Day 5.\n\nYou need to find the day where I can buy the stock and day where I can sell the stock to get the max profit :\n\nIn the above case, If I buy the stock at Day 0 (i.e when the value is 1) and sell on Day 4 (when the value is 34). I get the max profit. Profit = 34-1 = 33. So, the output for the above example should be [0,4] (i.e [buy-day, sell-day])\n\nIf there is a test case in which any profit is not possible, Print [0,0] (i.e: you're buying and selling the stock on the same day)\n\nTest Cases :\n[200, 1,5,6,7,34,10]\n[1,5,6,7,34,10,300]\n[10,1,5,6,7,34,10,20]\n[2,200,1,0,10]\n[7,10]\n[1] //Output: [0,0] You buy and sell on the same day because there's only one number.\n\nIf an emty array or null is passed as an input return [-1,-1].",algorithm:"// loop1 from 0 to end with BuyIndex\n// loop2 from index to end sellIndex\n// declare MaxProfit, BuyDay, SellDay\n// compute profit if greater than MaxProfit, Replace BuyDay,SellDay and overriteMaxProfit",method:function(e){if(!e||0===e.length)return[-1,-1];if(1===e.length)return[0,0];for(var t=0,a=0,n=0,r=0;r<e.length;r++)for(var C=r+1;C<e.length;C++){var D=e[C]-e[r];D>t&&(t=D,a=r,n=C)}return[a,n]},testCases:[[1,5,6,7,34,10],[200,1,5,6,7,34,10],[1,5,6,7,34,10,300],[10,1,5,6,7,34,10,20],[2,200,1,0,10],[7,10],[1]]},E=a(48);var Q={name:"Decks",problem:'You\u2019re given an X decks of N playing cards with few cards missing. The playing cards can be in the form of an array and is shuffled in any order:\n\nEg: ["9C", "KS", "AC", "AH", "8D", "4C", "KD", "JC", "7D", "9D", "2H", "7C", "3C", "7S", "5C", "6H", \u201cTH"]\n\nwhere: \u2018H\u2019,\u2019S\u2019,\u2019D\u2019,\u2019C\u2019 is Hearts, Spades, Diamonds and Clubs\n\nand \u2018A\u2019,\u20192\u2019,\u20193\u2019,\u20194\u2019,\u20195\u2019,\u20196\u2019,\u20197\u2019,\u20198\u2019,\u20199\u2019,\u2019T\u2019,\u2019J\u2019,\u2019Q\u2019,\u2019K\u2019 is Ace, 2,3\u2026. Ten, Jack, Queen, King respectively.\n\nYou need to find out how many complete decks can be made from the cards you\u2019ve given in the input.\n\nTest Cases:\n\ndecksOfCards(["9C", "KS", "AC", "AH", "8D", "4C", "KD", "JC", "7D", "9D", "2H", "7C", "3C", "7S", "5C", "6H", "TH"]) // Output: 0 (No complete decks in this array)\n\ndecksOfCards(["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD"]) // Output: 2 (2 complete decks in this array)\n\ndecksOfCards(["TD", "TC", "6H", "5H", "KC", "JH", "QC", "4S", "2S", "8H", "JD", "2H", "AC", "7D", "6C", "5D", "AD", "TS", "4D", "KH", "3H", "9H", "3S", "2D", "5S", "6S", "AH", "JS", "6D", "9S", "4C", "7C", "8S", "AS", "KD", "7S", "4H", "KS", "7H", "9D", "8D", "3D", "5C", "9C", "QH", "JC", "8C", "TH", "QS", "3C", "QD", "2C"]) // Output: 1\n\ndecksOfCards(["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AH"]) // Output: 2\n\ndecksOfCards(["QC", "6D", "KD", "QS", "7S", "5C", "QH", "3H", "AD", "9C", "7H", "QD", "QH", "2S", "AH", "KS", "5D", "QC", "AS", "2D", "6C", "8C", "7D", "8H", "9S", "4D", "6H", "JC", "3S", "4C", "3C", "7S", "KD", "4H", "5C", "7C", "AS", "3D", "7D", "2H", "8S", "2H", "8D", "9S", "3C", "5H", "KS", "8D", "9H", "TH", "2C", "JH", "6D", "KC", "TS", "6S", "TD", "4S", "8S", "5S", "8H", "TD", "9D", "4H", "6C", "7C", "AC", "JC", "JD", "TS", "KH", "2C", "QD", "JS", "QS", "KH", "8C", "3H", "2D", "2S", "3S", "5H", "4S", "9C", "4D", "6H", "JS", "TH", "9H", "TC", "7H", "JH", "TC", "6S", "AD", "AC", "JD", "4C", "5D", "9D", "KC", "3D"]) // Output: 1\n\ndecksOfCards(["AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH"]) // Output: 0',algorithm:"",method:function(e){var t=new Map,a=["A","2","3","4","5","6","7","8","9","T","J","Q","K"];a.forEach((function(e){return t.set(e+"H",0)})),a.forEach((function(e){return t.set(e+"S",0)})),a.forEach((function(e){return t.set(e+"D",0)})),a.forEach((function(e){return t.set(e+"C",0)})),e.forEach((function(e){t.set(e,t.get(e)+1)}));var n=Array.from(t.values());return Math.min.apply(Math,Object(E.a)(n))},testCases:[["9C","KS","AC","AH","8D","4C","KD","JC","7D","9D","2H","7C","3C","7S","5C","6H","TH"],["2S","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH","2S","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH","2S","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD"],["TD","TC","6H","5H","KC","JH","QC","4S","2S","8H","JD","2H","AC","7D","6C","5D","AD","TS","4D","KH","3H","9H","3S","2D","5S","6S","AH","JS","6D","9S","4C","7C","8S","AS","KD","7S","4H","KS","7H","9D","8D","3D","5C","9C","QH","JC","8C","TH","QS","3C","QD","2C"],["2S","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","2S","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH","AH"],["QC","6D","KD","QS","7S","5C","QH","3H","AD","9C","7H","QD","QH","2S","AH","KS","5D","QC","AS","2D","6C","8C","7D","8H","9S","4D","6H","JC","3S","4C","3C","7S","KD","4H","5C","7C","AS","3D","7D","2H","8S","2H","8D","9S","3C","5H","KS","8D","9H","TH","2C","JH","6D","KC","TS","6S","TD","4S","8S","5S","8H","TD","9D","4H","6C","7C","AC","JC","JD","TS","KH","2C","QD","JS","QS","KH","8C","3H","2D","2S","3S","5H","4S","9C","4D","6H","JS","TH","9H","TC","7H","JH","TC","6S","AD","AC","JD","4C","5D","9D","KC","3D"],["AC","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH","AC","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH","AC","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH"]]};var g,b={name:"Flatten Array",problem:"Flatten this array out : [1,2,[3,4,[5,6],7,[8,9]]]\nOutput should be [1,2,3,4,5,6,7,8,9]\n\nYou can ONLY use arr.push(), arr.concat() as library / array functions. Please don't use any other library or array functions.",algorithm:"",method:function e(t,a){return t.forEach((function(t){Array.isArray(t)?e(t,a):(a||(a=[]),a.push(t))})),a},testCases:[[1,2,[3,4,[5,6],7,[8,9]]]]},v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,y),r.a.createElement(K,Q),r.a.createElement(K,b))},k=a(33),x=a(96),O=Object(l.a)(x.a)({textAlign:"center",borderRadius:"25%"}),w=Object(l.a)(x.a)({fontSize:"1em"}),I=Object(l.a)(x.a)({display:"flex",justifyItems:"center",justifyContent:"center"}),j=Object(l.a)(x.a)({width:"50%",backgroundColor:"yellow"}),F=Object(l.a)(x.a)({width:"50%",backgroundColor:"magenta"}),M=function e(t){var a=t.node;if(!a||!a.key)return null;var n=r.a.createElement(O,null,r.a.createElement(w,null,a.key),r.a.createElement(I,null,r.a.createElement(j,null,a.left&&r.a.createElement(e,{node:a.left})),r.a.createElement(F,null,a.right&&r.a.createElement(e,{node:a.right}))));return r.a.createElement(r.a.Fragment,null,n)},N=a(47),B=(a(69),function(e){var t=e.addNode,a=Object(n.useState)(0),C=Object(k.a)(a,2),D=C[0],S=C[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"editor-container"},r.a.createElement("label",null,"Value:",r.a.createElement("input",{type:"number",value:D,onChange:function(e){S(e.target.value)}})),r.a.createElement("button",{type:"button",onClick:function(){t(D)}},"Add")))}),P=function(){var e=Object(n.useState)({key:null,left:null,right:null}),t=Object(k.a)(e,2),a=t[0],C=t[1];Object(n.useEffect)((function(){var e=localStorage.getItem("rootNode");e&&C(JSON.parse(e))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{addNode:function(e){(function e(t,a){if(t.key!==a)return null===t.key?(t.key=a,t.left=null,t.right=null,localStorage.setItem("rootNode",JSON.stringify(g)),C(g)):void(parseInt(a)>parseInt(t.key)?(t.right||(t.right={key:null}),e(t.right,a)):(t.left||(t.left={key:null}),e(t.left,a)))})(g=Object(N.cloneDeep)(a),e)}}),r.a.createElement(M,{node:a}))},Y=a(97),X=a(98),L=a(99);var R=function(e){var t=e.name,a=e.code,n=function(e){var t,a,n="rgb("+(e=e.replace("#","")).match(new RegExp("(.{"+e.length/3+"})","g")).map((function(t){return parseInt(e.length%2?t+t:t,16)})).join(",")+")",r=(n=n.replace(/[^\d,]/g,"").split(","))[0]/255,C=n[1]/255,D=n[2]/255,S=Math.max(r,C,D),l=Math.min(r,C,D),H=(S+l)/2;if(S===l)t=a=0;else{var o=S-l;a=H>.5?o/(2-S-l):o/(S+l),S===r&&C>=D?t=1.0472*(C-D)/o:S===r&&C<D?t=1.0472*(C-D)/o+6.2832:S===C?t=1.0472*(D-r)/o+2.0944:S===D&&(t=1.0472*(r-C)/o+4.1888)}t=t/6.2832*360+0,(t+=180)>360&&(t-=360);if(t/=360,0===a)r=C=D=H;else{var c=function(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*(t-e)*a:a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e},i=H<.5?H*(1+a):H+a-H*a,m=2*H-i;r=c(m,i,t+1/3),C=c(m,i,t),D=c(m,i,t-1/3)}return r=Math.round(255*r),C=Math.round(255*C),D=Math.round(255*D),"#"+(16777216|(n=D|C<<8|r<<16)).toString(16).substring(1)}(a).toUpperCase();return r.a.createElement(Y.a,null,r.a.createElement(X.a,{title:t+" "+a.substr(1),subheader:"comp = "+n.substr(1)}),r.a.createElement(L.a,null,r.a.createElement(J.a,{container:!0,spacing:3},r.a.createElement(J.a,{item:!0,xs:10,style:{backgroundColor:a}}),r.a.createElement(J.a,{item:!0,xs:2,style:{backgroundColor:n,color:a}},n.substr(1)))))},z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{name:"Lime",code:"#05FF01"}),r.a.createElement(R,{name:"Olive",code:"#818000"}),r.a.createElement(R,{name:"Skyblue",code:"#86CEEB"}),r.a.createElement(R,{name:"Navy",code:"#000080"}),r.a.createElement(R,{name:"Snow",code:"#FFFAFA"}),r.a.createElement(R,{name:"Chocolate",code:"#D2691F"}),r.a.createElement(R,{name:"Firebrick",code:"#B22122"}),r.a.createElement(R,{name:"Tan",code:"#D2B48C"}),r.a.createElement(R,{name:"Silver",code:"#C0C0C0"}),r.a.createElement(R,{name:"Teal",code:"#028080"}),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("a",{href:"https://visme.co/blog/color-combinations",target:"_blank"},"https://visme.co/blog/color-combinations")))},U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(u.a,{exact:!0,path:"/",component:null}),r.a.createElement(u.a,{exact:!0,path:"/binarytree",component:P}),r.a.createElement(u.a,{exact:!0,path:"/algorithms",component:v}),r.a.createElement(u.a,{exact:!0,path:"/colors",component:z}))};var V=function(){return r.a.createElement(S.a,null,r.a.createElement(U,null))};D.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.f0e83513.chunk.js.map