
class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    atacar(alvo, habilidade) {
        //veriificar se tem mana e energia
        if (this.mana >= habilidade.custo
            && this.energia >= habilidade.energia) {
            // dano no alvo
            alvo.hp -= habilidade.dano;
            console.log (alvo.hp);
             console.log (habilidade.dano);
            // debitar mana
            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo;
                this.energia += 50;
            }
            // esvaziar energia
            if (habilidade.energia > 0) {
                this.energia = 0;
            }
            //retornar mensagem
            return `${this.nome} usou ${habilidade.nome}`;
        } else {
            return ` Sem mana para usar ${habilidade.nome}`;
        }
    }
    boss_atacar(alvo) {
        if (this.energia == 100) {
            alvo.hp -= 15;
            this.energia = 0;

        } else {
            this.energia += 50;
        }
    };

}

class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }

}

//instaciar (criar) os objetos
let hero = new Personagem("Master Chief", "Herói", 100, 100, 0);
let boss = new Personagem("Diabo", "Boss", 100, 0, 50);

document.getElementById("nome-heroi").textContent = `${hero.nome}`;
document.getElementById("titulo-heroi").textContent = `🗡️ ${hero.titulo}`;

document.getElementById("nome-boss").textContent = `${boss.nome}`;
document.getElementById("titulo-boss").textContent = `💀🪄 ${boss.titulo}`;

const atualizarInterface = (mensagem) => {
    console.log(hero.mana)
    document.getElementById("hp-hero").value = hero.hp;
    document.getElementById("mp-hero").value = hero.mana;
    document.getElementById("en-hero").value = hero.energia;
    //barras boss
    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("en-boss").value = boss.energia;

}


//criar habilidade e botões
let container = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "Ataque", 4, 0, 0),
    new Habilidade(2, "Skill", 8, 10, 0),
    new Habilidade(3, "Ultimate", 15, 0, 100)
];

console.log (listaHabilidades[0].nome);

listaHabilidades.forEach(hab => {
     console.log (hab.nome);
    let btn = document.createElement("button");
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-dark");
    container.appendChild(btn);
    btn.onclick = () => {
        let mensagem = hero.atacar(boss, hab);
        atualizarInterface(mensagem);
        boss.boss_atacar(hero);
    }
});
