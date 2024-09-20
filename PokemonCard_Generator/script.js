const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF"
  };
const url="https://pokeapi.co/api/v2/pokemon/";
const card=document.getElementById('card');
const btn=document.getElementById('btn');
let getPokeData=()=>{
    let id=Math.floor(Math.random()*150+1);
    // console.log(id)
    let finalurl=url+id;
    // console.log(finalurl);
    fetch(finalurl)
    .then((response) => response.json())
    .then((data)=>{
        generateCard(data);
         console.log(data)
    })

}
let generateCard=(data)=>{
     const hp=data.stats[0].base_stat;
     const imgSrc=data.sprites.other.dream_world.front_default;
     console.log(imgSrc)
     const pokeName=data.name;
     const statAttack=data.stats[1].base_stat;
     const statDefense=data.stats[2].base_stat;
     const statSpeed=data.stats[5].base_stat;
    //  const type1=data.types[0].type.name;
    // //  console.log(type1)
    // const type2=data.types[1].type.name;
    const theme=typeColor[data.types[0].type.name];
    console.log(theme)
     card.innerHTML=`<div class="Health">
    <p class="hp">
        <span>HP</span>
        ${hp}
    </p>
</div>
<img src=${imgSrc} height="150px">
<h2 class="pokeName">${pokeName}</h2>
<div class="types">
</div>
<div class="stat">
    <div>
        <h3>${statAttack}</h3>
        <p>Attack</p>
    </div>
    <div>
        <h3>${statDefense}</h3>
        <p>Defense</p>
    </div>
    <div>
        <h3>${statSpeed}</h3>
        <p>Speed</p>
    </div>
   
</div>
 <div class='abilitybox'>
 Ability
<div class='ability'></div>
 </div>
 `
appendAbility(data.abilities)
appendTypes(data.types);
styleCard(theme);
}
const appendTypes=(types)=>{
    types.forEach(item =>{
         let span =document.createElement('span');
         span.textContent=item.type.name;
         document.querySelector('.types').appendChild(span);
    })
}
btn.addEventListener('click',getPokeData);
// btn.addEventListener('load',getPokeData);
let styleCard=(color)=>{
    card.style.background=`radial-gradient(circle at 50% 0%, ${color} 40%,#ffffff 38%)`;
    card.style.boxShadow=`3px 3px 6px 2px ${color}`
}
const appendAbility=(ability)=>{
    ability.forEach(item=>{
       let box=document.createElement('span');
       box.textContent=item.ability.name;
       document.querySelector('.ability').appendChild(box);
    })
}