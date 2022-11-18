
                                                   //DZ_11
hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = hero.concat(native,destination);
console.log(rainbow.reverse());
rainbow.splice(0,6,'Richard','Of','York','Gave','Battle','In','Vain');
console.log(rainbow);


colors = ['firebrick','saddlebrown','yellow','green','dodgerblue','darkslateblue','darkviolet'];

for (i = 0; i < colors.length; i++) {
    document.write(`
        <div class = "circle" style = "background-color: ${colors[i]}"></div>
   `)
}
