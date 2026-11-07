// Banco de Dados oficial atualizado com o Portfólio de Animais do Projeto Pacotinho de Amor
const initialAnimals = [
  // --- CACHORROS ---
  {
    id: 'julinho',
    name: 'Julinho',
    species: 'cachorro',
    age: '1 ano',
    sex: 'Macho',
    size: 'medio',
    animalAge: 'adulto',
    group: 'Chácara Santo Antônio',
    animalEnergy: 'moderado',
    photo: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    story: 'Julinho foi encontrado no estacionamento de uma farmácia na Chácara Santo Antônio, sozinho e precisando de ajuda. Hoje está seguro e aguarda uma família responsável.',
    personality: 'Carinhoso, dócil e muito sociável.',
    care: 'Passeios regulares e carinho.',
    info: 'Vacinado, Vermifugado, Castrado.',
    dogsOk: 'sim',
    catsOk: 'desconhecido',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'zeus',
    name: 'Zeus',
    species: 'cachorro',
    age: '3 anos',
    sex: 'Macho',
    size: 'medio',
    animalAge: 'adulto',
    group: 'Resgatados do Embu',
    animalEnergy: 'calmo',
    photo: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    story: 'Zeus viveu meses em uma casa abandonada no Embu após a morte de sua tutora. Ficava preso num quintal cheio de lixo e sofria agressões. No abrigo, cuidava até dos filhotes que chegavam.',
    personality: 'Um verdadeiro sonho de cachorro caramelo! Alegre, carinhoso, da lambeijos e muito sociável.',
    care: 'Tranquilo na guia, ama passear e ficar pertinho.',
    info: 'Castrado, Vacinado, Vermifugado.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'belo',
    name: 'Belo',
    species: 'cachorro',
    age: '2/3 anos',
    sex: 'Macho',
    size: 'medio',
    animalAge: 'adulto',
    group: 'Resgatados do Grajaú',
    animalEnergy: 'calmo',
    photo: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
    story: 'Resgatado no Grajaú após vagar por dias sozinho pedindo atenção e comida. Passou por todos os exames (parvovirose, cinomose, giárdia, carrapato), todos negativos.',
    personality: 'Extremamente tranquilo, amoroso e muito "zen".',
    care: 'Muito adaptável, não demonstra incômodo em lares temporários.',
    info: 'Vacinado, Vermifugado, Castrado. Exames 100% ok.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'bruno',
    name: 'Bruno',
    species: 'cachorro',
    age: '3/4 anos',
    sex: 'Macho',
    size: 'medio',
    animalAge: 'adulto',
    group: 'Jardim Robru / Zona Leste',
    animalEnergy: 'moderado',
    photo: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80',
    story: 'Resgatado no extremo leste com ferimentos na orelha e pescoço por possíveis maus-tratos. Esteve internado para tratamento de miíase e se recuperou totalmente.',
    personality: 'Apesar do sofrimento passado, é super dócil, alegre, quase não late e não destrói objetos. Ama andar de carro sem enjoar.',
    care: 'Apenas carinho e convivência familiar.',
    info: 'Castrado, Vacinado, Vermifugado.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'olivia',
    name: 'Olívia (Mamãe)',
    species: 'cachorro',
    age: '2 anos',
    sex: 'Fêmea',
    size: 'medio',
    animalAge: 'adulto',
    group: 'Família Olívia',
    animalEnergy: 'calmo',
    photo: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80',
    story: 'Olívia foi encontrada nas ruas protegendo seus filhotes (Oscar e Oceane). Agora está segura e pronta para um lar definitivo.',
    personality: 'Mãe protetora, meiga, paciente e companheira.',
    care: 'Atenção e espaço confortável.',
    info: 'Castrada, Vacinada, Vermifugada.',
    dogsOk: 'sim',
    catsOk: 'desconhecido',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'oscar',
    name: 'Oscar (Filhote da Olívia)',
    species: 'cachorro',
    age: '2 meses',
    sex: 'Macho',
    size: 'medio',
    animalAge: 'filhote',
    group: 'Família Olívia',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=600&q=80',
    story: 'Filhote da Olívia. Possui uma limitação/sequela em uma das patinhas, mas leva uma vida normal, feliz e ativa!',
    personality: 'Super brincalhão, superador e amoroso. [STATUS: ADOTADO]',
    care: 'Acompanhamento de desenvolvimento da patinha.',
    info: 'Vacinado, Vermifugado.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'sim',
    homeSuitable: 'qualquer'
  },
  {
    id: 'ziggy',
    name: 'Ziggy',
    species: 'cachorro',
    age: '8 meses',
    sex: 'Macho',
    size: 'medio',
    animalAge: 'filhote',
    group: 'Ninhada da Barriguinha',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    story: 'Ziggy e Floquinho foram resgatados ainda na barriga da mamãe e esperam por um lar cheio de amor desde o nascimento.',
    personality: 'Jovem, animado e cheio de energia para brincar.',
    care: 'Gasta bastante energia em brincadeiras.',
    info: '8 meses - Castrado, Vacinado, Vermifugado.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'floquinho',
    name: 'Floquinho',
    species: 'cachorro',
    age: '8 meses',
    sex: 'Macho',
    size: 'medio',
    animalAge: 'filhote',
    group: 'Ninhada da Barriguinha',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=600&q=80',
    story: 'Irmão do Ziggy, resgatado antes mesmo de nascer. Espera uma família amorosa.',
    personality: 'Carinhoso, esperto e dócil.',
    care: 'Rotina de exercícios e passeios.',
    info: '8 meses - Castrado, Vacinado, Vermifugado.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'julie',
    name: 'Julie',
    species: 'cachorro',
    age: '2 anos',
    sex: 'Fêmea',
    size: 'grande',
    animalAge: 'adulto',
    group: 'Resgatados de SP',
    animalEnergy: 'calmo',
    photo: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=600&q=80',
    story: 'Foi abandonada durante o cio, atropelada e enfrentou uma infecção grave. Foi 100% reabilitada sem perder sua doçura.',
    personality: 'Resiliente, doce, meiga e gratificante.',
    care: 'Necessita de carinho e proteção constante.',
    info: 'Vacinada, Castrada, Porte Médio/Grande.',
    dogsOk: 'sim',
    catsOk: 'desconhecido',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'casa quintal'
  },
  {
    id: 'daniel',
    name: 'Daniel',
    species: 'cachorro',
    age: '2 anos',
    sex: 'Macho',
    size: 'medio',
    animalAge: 'adulto',
    group: 'Resgatados de SP',
    animalEnergy: 'moderado',
    photo: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=600&q=80',
    story: 'Daniel foi encontrado sozinho em frente a uma farmácia. Agora está seguro e busca uma família para sempre.',
    personality: 'Companheiro, leal e simpático.',
    care: 'Passeios diários.',
    info: 'Castrado, Vacinado, Vermifugado.',
    dogsOk: 'sim',
    catsOk: 'desconhecido',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'canela',
    name: 'Canela',
    species: 'cachorro',
    age: '3/4 anos',
    sex: 'Fêmea',
    size: 'medio',
    animalAge: 'adulto',
    group: 'Resgatados de SP',
    animalEnergy: 'calmo',
    photo: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
    story: 'Sofreu uma facada quando filhote. Viveu anos sob proteção de pessoas comunitárias na rua. Quando eles mudaram, Canela foi resgatada para não ficar desamparada.',
    personality: 'Forte, dócil, paciente e muito amorosa.',
    care: 'Um lar amoroso onde se sinta protegida.',
    info: 'Vacinada, Vermifugada, Castrada.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'nutella',
    name: 'Nutella',
    species: 'cachorro',
    age: '3 anos',
    sex: 'Fêmea',
    size: 'medio',
    animalAge: 'adulto',
    group: 'Resgatados de SP',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1554692998-0d25f324b051?auto=format&fit=crop&w=600&q=80',
    story: 'Foi adotada apenas para ser brinquedo de criança quando filhote. Ao crescer, foi deixada no quintal sem comida e foi resgatada.',
    personality: 'Forte, carinhosa, alegre e expressiva.',
    care: 'Dedicada e com espaço para brincar.',
    info: 'Castrada, Vacinada, Vermifugada.',
    dogsOk: 'sim',
    catsOk: 'desconhecido',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'casa quintal'
  },
  {
    id: 'nicky',
    name: 'Nicky',
    species: 'cachorro',
    age: '1 ano',
    sex: 'Macho',
    size: 'medio',
    animalAge: 'adulto',
    group: 'Resgatados de SP',
    animalEnergy: 'moderado',
    photo: 'https://images.unsplash.com/photo-1534361960057-19889db9875e?auto=format&fit=crop&w=600&q=80',
    story: 'Nicky foi resgatado ainda na barriga da mamãe e espera por sua oportunidade de ter uma família própria.',
    personality: 'Muito carinhoso e ansioso por um lar.',
    care: 'Atenção e caminhadas.',
    info: 'Vacinado, Vermifugado, Castrado.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'luma',
    name: 'Luma',
    species: 'cachorro',
    age: '6 meses',
    sex: 'Fêmea',
    size: 'pequeno',
    animalAge: 'filhote',
    group: 'Resgatados de SP',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    story: 'Luma foi abandonada pelos seus antigos tutores quando se mudaram e decidiram deixá-la para trás.',
    personality: 'Alegre, brincalhona, carinhosa e adora dar lambeijos!',
    care: 'Atenção de filhote e brincadeiras.',
    info: 'Castrada, Vacinada, Vermifugada.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'bebe',
    name: 'Bebê',
    species: 'cachorro',
    age: '1 ano',
    sex: 'Fêmea',
    size: 'pequeno',
    animalAge: 'adulto',
    group: 'Resgatados de SP',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80',
    story: 'Foi resgatada em um dia chuvoso, encolhida e com fome. Hoje aprendeu truques como sentar e deitar e ama brincar de bolinha!',
    personality: 'Muito inteligente, dócil e dedicada.',
    care: 'Ainda aprendendo a passear na guia.',
    info: 'Castrada, Vacinada, Vermifugada. Porte Pequeno/Médio.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'revoada',
    name: 'Revoada',
    species: 'cachorro',
    age: '2 anos',
    sex: 'Fêmea',
    size: 'pequeno',
    animalAge: 'adulto',
    group: 'Resgatados de SP',
    animalEnergy: 'calmo',
    photo: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=600&q=80',
    story: 'Era deixada solta na rua por tutores irresponsáveis até ser abandonada. Foi acolhida por uma vizinha protetora.',
    personality: 'Meiga, carinhosa, sociável com cães, crianças e tolera gatos.',
    care: 'Amor e segurança.',
    info: 'Castrada, Vacinada, Vermifugada. Porte Pequeno.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'pipoca-cao',
    name: 'Pipoca',
    species: 'cachorro',
    age: '2 anos',
    sex: 'Fêmea',
    size: 'medio',
    animalAge: 'adulto',
    group: 'Terminal Guarapiranga / ZS',
    animalEnergy: 'calmo',
    photo: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80',
    story: 'Encontrada vagando perto do Terminal Guarapiranga. Ficou 3 dias na rua até ser resgatada machucada. Totalmente reabilitada.',
    personality: 'Tranquila nos passeios (não puxa a guia), dócil e aceita outros cães. (Tem um pouco de receio de motos).',
    care: 'Passeios calmos.',
    info: 'Castrada, Vacinada, Vermifugada.',
    dogsOk: 'sim',
    catsOk: 'desconhecido',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'susi',
    name: 'Susi',
    species: 'cachorro',
    age: '45 dias',
    sex: 'Fêmea',
    size: 'medio',
    animalAge: 'filhote',
    group: 'Ninhada Teatro Bela Vista',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=600&q=80',
    story: 'A mamãe deu à luz no depósito do Teatro Escola na Bela Vista. Os filhotes foram acolhidos com segurança.',
    personality: 'Filhotinha delicada, curiosa e brincalhona.',
    care: 'Cuidados básicos de filhote.',
    info: '45 dias - Vacinados e Vermifugados.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'tico',
    name: 'Tico',
    species: 'cachorro',
    age: '45 dias',
    sex: 'Macho',
    size: 'medio',
    animalAge: 'filhote',
    group: 'Ninhada Teatro Bela Vista',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    story: 'Irmão de Susi e Teco, resgatado do depósito do Teatro na Bela Vista.',
    personality: 'Esperto e brincalhão.',
    care: 'Vacinação de filhote em andamento.',
    info: '45 dias - Vacinado e Vermifugado.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: 'teco',
    name: 'Teco',
    species: 'cachorro',
    age: '45 dias',
    sex: 'Macho',
    size: 'medio',
    animalAge: 'filhote',
    group: 'Ninhada Teatro Bela Vista',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=600&q=80',
    story: 'Irmão de Susi e Tico, resgatado no galpão do Teatro Escola.',
    personality: 'Manhoso e carinhoso.',
    care: 'Vacinação de filhote em andamento.',
    info: '45 dias - Vacinado e Vermifugado.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },

  // --- GATOS ---
  {
    id: 'torrada',
    name: 'Torrada',
    species: 'gato',
    age: '3 meses',
    sex: 'Fêmea',
    size: 'pequeno',
    animalAge: 'filhote',
    group: 'Resgatadas em São Mateus',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    story: 'Torrada e Manteiga foram abandonadas juntas em São Mateus e salvas pela equipe do projeto.',
    personality: 'Curiosa, meiga e brincalhona.',
    care: 'EXIGÊNCIA: Lar 100% telado e sem rota de fuga.',
    info: '3 meses - Vacinada, Vermifugada.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'apartamento'
  },
  {
    id: 'manteiga',
    name: 'Manteiga',
    species: 'gato',
    age: '3 meses',
    sex: 'Fêmea',
    size: 'pequeno',
    animalAge: 'filhote',
    group: 'Resgatadas em São Mateus',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
    story: 'Irmã da Torrada, resgatada em São Mateus. [STATUS: ADOTADA!]',
    personality: 'Muito manhosa e carinhosa.',
    care: 'EXIGÊNCIA: Lar 100% telado.',
    info: '3 meses - Vacinada, Vermifugada. [ADOTADA]',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'apartamento'
  }
];

// Gerenciamento do Armazenamento Local
function getAnimals() {
  const data = localStorage.getItem('pacotinhos_animals');
  return data ? JSON.parse(data) : initialAnimals;
}

function saveAnimals(animals) {
  localStorage.setItem('pacotinhos_animals', JSON.stringify(animals));
}

function getLeads() {
  const data = localStorage.getItem('pacotinhos_leads');
  return data ? JSON.parse(data) : [];
}

function saveLead(lead) {
  const leads = getLeads();
  leads.push({ ...lead, date: new Date().toLocaleString('pt-BR') });
  localStorage.setItem('pacotinhos_leads', JSON.stringify(leads));
}

// Navegação por Abas
document.querySelectorAll('.nav-btn, [data-go]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.page || btn.dataset.go;
    switchTab(target);
  });
});

function switchTab(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  const activeBtn = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Renderizar Catálogos de Cães e Gatos
function renderCatalogs() {
  const animals = getAnimals();

  const dogs = animals.filter(a => a.species === 'cachorro');
  const cats = animals.filter(a => a.species === 'gato');

  document.getElementById('dogCount').textContent = dogs.length;
  document.getElementById('catCount').textContent = cats.length;
  document.getElementById('dogsTotal').textContent = `${dogs.length} animais`;
  document.getElementById('catsTotal').textContent = `${cats.length} animais`;

  renderGrid('dogsGrid', 'dogsEmpty', dogs);
  renderGrid('catsGrid', 'catsEmpty', cats);
}

function renderGrid(gridId, emptyId, list) {
  const grid = document.getElementById(gridId);
  const empty = document.getElementById(emptyId);

  grid.innerHTML = '';
  if (list.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  list.forEach(animal => {
    const card = document.createElement('article');
    card.className = 'animal-card';
    card.onclick = () => openProfile(animal.id);
    card.innerHTML = `
      <img src="${animal.photo || 'https://via.placeholder.com/300x200?text=Sem+Foto'}" alt="${animal.name}">
      <div class="card-body">
        <h3>${animal.name}</h3>
        <p>${animal.sex || 'Sexo n/i'} · ${animal.age || 'Idade n/i'}</p>
        <p><strong>Porte:</strong> ${animal.size || 'Médio'}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Busca em Tempo Real
document.getElementById('search').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  if (!query) return;

  const animals = getAnimals();
  const filtered = animals.filter(a => 
    a.name.toLowerCase().includes(query) || 
    (a.personality && a.personality.toLowerCase().includes(query)) ||
    (a.group && a.group.toLowerCase().includes(query)) ||
    (a.story && a.story.toLowerCase().includes(query))
  );

  if (filtered.length === 0) {
    resultsContainer.innerHTML = '<p class="empty">Nenhum animal encontrado com esse termo.</p>';
    return;
  }

  filtered.forEach(animal => {
    const card = document.createElement('article');
    card.className = 'animal-card';
    card.onclick = () => openProfile(animal.id);
    card.innerHTML = `
      <img src="${animal.photo || 'https://via.placeholder.com/300x200?text=Sem+Foto'}" alt="${animal.name}">
      <div class="card-body">
        <h3>${animal.name}</h3>
        <p>${animal.species.toUpperCase()} · ${animal.age || ''}</p>
      </div>
    `;
    resultsContainer.appendChild(card);
  });
});

document.getElementById('clearSearch').onclick = () => {
  document.getElementById('search').value = '';
  document.getElementById('searchResults').innerHTML = '';
};

// Abrir Perfil do Animal
function openProfile(id) {
  const animals = getAnimals();
  const animal = animals.find(a => a.id === id);
  if (!animal) return;

  const profileContent = document.getElementById('profileContent');
  profileContent.innerHTML = `
    <img src="${animal.photo || 'https://via.placeholder.com/600x400?text=Sem+Foto'}" alt="${animal.name}">
    <div class="profile-inner">
      <h2>${animal.name}</h2>
      <p class="profile-meta">${animal.species.toUpperCase()} · ${animal.sex || 'n/i'} · ${animal.age || 'n/i'} · Porte ${animal.size || 'Médio'}</p>
      
      <h3>História do Pacotinho</h3>
      <p>${animal.story || 'História não informada.'}</p>
      
      <h3>Personalidade</h3>
      <p>${animal.personality || 'Não informada.'}</p>

      <h3>Cuidados e Requisitos</h3>
      <p>${animal.care || 'Sem cuidados especiais relatados.'}</p>

      <h3>Informações de Saúde</h3>
      <p>${animal.info || 'Vacinado/Vermifugado.'}</p>

      <button class="primary interest-btn" onclick="registerInterest('${animal.name}')">
        💗 Tenho interesse em adotar o(a) ${animal.name}
      </button>
    </div>
  `;

  switchTab('profile');
}

document.getElementById('backFromProfile').onclick = () => switchTab('home');

function registerInterest(animalName) {
  saveLead({ animal: animalName });
  showToast(`Interesse em ${animalName} registrado! Abrindo o WhatsApp...`);
  
  const text = encodeURIComponent(`Olá! Vi o(a) ${animalName} no catálogo do Projeto Pacotinho de Amor e gostaria de saber mais sobre a adoção.`);
  setTimeout(() => {
    window.open(`https://wa.me/5511940436900?text=${text}`, '_blank');
  }, 1200);
}

// Algoritmo do Teste de Compatibilidade
document.getElementById('matchForm').onsubmit = (e) => {
  e.preventDefault();
  const prefSpecies = document.getElementById('prefSpecies').value;
  const homeType = document.getElementById('homeType').value;
  const otherPets = document.getElementById('otherPets').value;
  const children = document.getElementById('children').value;
  const agePref = document.getElementById('agePref').value;
  const energy = document.getElementById('energy').value;

  const animals = getAnimals();
  const resultsContainer = document.getElementById('matchResults');
  resultsContainer.innerHTML = '<h3>Seus melhores matches no projeto:</h3>';

  let matches = animals.map(animal => {
    let score = 50;
    let warnings = [];

    if (prefSpecies !== 'ambos' && animal.species === prefSpecies) score += 20;
    if (agePref !== 'qualquer' && animal.animalAge === agePref) score += 15;
    if (energy !== 'qualquer' && animal.animalEnergy === energy) score += 15;

    if (children === 'sim' && animal.kidsOk === 'nao') {
      warnings.push('Atenção: Não recomendado para casas com crianças pequenas.');
    }
    if ((otherPets === 'cachorro' || otherPets === 'ambos') && animal.dogsOk === 'nao') {
      warnings.push('Atenção: Pode ter restrições com outros cães.');
    }
    if ((otherPets === 'gato' || otherPets === 'ambos') && animal.catsOk === 'nao') {
      warnings.push('Atenção: Pode ter restrições com gatos.');
    }

    return { animal, score: Math.min(score, 100), warnings };
  });

  matches.sort((a, b) => b.score - a.score);

  matches.slice(0, 6).forEach(m => {
    const card = document.createElement('article');
    card.className = 'result-card';
    card.innerHTML = `
      <img src="${m.animal.photo || 'https://via.placeholder.com/300x200'}" alt="${m.animal.name}">
      <div class="card-body">
        <span class="score">${m.score}% de Compatibilidade</span>
        <h3>${m.animal.name}</h3>
        <p>${m.animal.species.toUpperCase()} · ${m.animal.age || ''}</p>
        ${m.warnings.map(w => `<p class="warning">${w}</p>`).join('')}
        <button class="primary" style="margin-top:10px" onclick="openProfile('${m.animal.id}')">Ver perfil</button>
      </div>
    `;
    resultsContainer.appendChild(card);
  });
};

// Área de Acesso / Administração
document.getElementById('volunteerEnter').onclick = () => {
  showToast('Modo voluntário ativado!');
  switchTab('home');
};

// Autenticação Administrador (Senha: Projeto)
document.getElementById('adminLogin').onsubmit = (e) => {
  e.preventDefault();
  const pass = document.getElementById('adminPassword').value;
  if (pass === 'Projeto') {
    showToast('Acesso administrativo concedido!');
    switchTab('admin');
    renderAdminList();
    renderLeadsList();
    document.getElementById('adminLogin').reset();
  } else {
    showToast('Senha incorreta!');
  }
};

document.getElementById('logout').onclick = () => {
  switchTab('access');
  showToast('Sessão encerrada.');
};

// Compressão de Imagens enviadas via upload para economizar localStorage
function compressImage(file, callback) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 800;
      const MAX_HEIGHT = 600;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // Comprime para formato JPEG com 75% de qualidade
      const dataUrl = canvas.toDataURL('image/jpeg', 0.75);
      callback(dataUrl);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Cadastro / Edição Admin
document.getElementById('animalForm').onsubmit = (e) => {
  e.preventDefault();

  const id = document.getElementById('animalId').value || Date.now().toString();
  const fileInput = document.getElementById('photo');
  const photoUrlInput = document.getElementById('photoUrl').value.trim();

  function processSave(photoData) {
    const existingAnimals = getAnimals();
    const existing = existingAnimals.find(a => a.id === id);

    const newAnimal = {
      id,
      name: document.getElementById('name').value,
      species: document.getElementById('species').value,
      age: document.getElementById('age').value,
      sex: document.getElementById('sex').value,
      size: document.getElementById('size').value,
      animalAge: document.getElementById('animalAge').value,
      group: document.getElementById('group').value,
      animalEnergy: document.getElementById('animalEnergy').value,
      photo: photoData || photoUrlInput || (existing ? existing.photo : 'https://via.placeholder.com/300x200?text=Sem+Foto'),
      story: document.getElementById('story').value,
      personality: document.getElementById('personality').value,
      care: document.getElementById('care').value,
      info: document.getElementById('info').value,
      dogsOk: document.getElementById('dogsOk').value,
      catsOk: document.getElementById('catsOk').value,
      kidsOk: document.getElementById('kidsOk').value,
      specialCare: document.getElementById('specialCare').value,
      homeSuitable: document.getElementById('homeSuitable').value
    };

    let animals = getAnimals();
    const index = animals.findIndex(a => a.id === id);
    if (index >= 0) {
      animals[index] = newAnimal;
    } else {
      animals.push(newAnimal);
    }

    try {
      saveAnimals(animals);
      showToast('Animal salvo no catálogo!');
      document.getElementById('animalForm').reset();
      document.getElementById('animalId').value = '';
      document.getElementById('formTitle').textContent = 'Cadastrar novo animal';
      renderCatalogs();
      renderAdminList();
    } catch (err) {
      alert('A imagem é muito grande para salvar no navegador. Tente usar uma URL da foto ou selecione uma imagem menor.');
    }
  }

  if (fileInput.files && fileInput.files[0]) {
    compressImage(fileInput.files[0], (compressedBase64) => {
      processSave(compressedBase64);
    });
  } else {
    processSave(null);
  }
};

document.getElementById('cancelEdit').onclick = () => {
  document.getElementById('animalForm').reset();
  document.getElementById('animalId').value = '';
  document.getElementById('formTitle').textContent = 'Cadastrar novo animal';
};

function renderAdminList() {
  const animals = getAnimals();
  const container = document.getElementById('adminList');
  container.innerHTML = '';

  animals.forEach(a => {
    const row = document.createElement('div');
    row.className = 'admin-row';
    row.innerHTML = `
      <img src="${a.photo || 'https://via.placeholder.com/50'}" alt="${a.name}">
      <div class="grow">
        <strong>${a.name}</strong> (${a.species})
        <p>${a.age || ''} · Porte: ${a.size || ''}</p>
      </div>
      <button class="small-btn" onclick="editAnimal('${a.id}')">Editar</button>
      <button class="small-btn delete-btn" onclick="deleteAnimal('${a.id}')">Excluir</button>
    `;
    container.appendChild(row);
  });
}

function editAnimal(id) {
  const animal = getAnimals().find(a => a.id === id);
  if (!animal) return;

  document.getElementById('formTitle').textContent = `Editar ${animal.name}`;
  document.getElementById('animalId').value = animal.id;
  document.getElementById('name').value = animal.name || '';
  document.getElementById('species').value = animal.species || 'cachorro';
  document.getElementById('age').value = animal.age || '';
  document.getElementById('sex').value = animal.sex || '';
  document.getElementById('size').value = animal.size || 'qualquer';
  document.getElementById('animalAge').value = animal.animalAge || 'adulto';
  document.getElementById('group').value = animal.group || '';
  document.getElementById('animalEnergy').value = animal.animalEnergy || 'moderado';
  document.getElementById('photoUrl').value = animal.photo.startsWith('data:') ? '' : animal.photo;
  document.getElementById('story').value = animal.story || '';
  document.getElementById('personality').value = animal.personality || '';
  document.getElementById('care').value = animal.care || '';
  document.getElementById('info').value = animal.info || '';
  document.getElementById('dogsOk').value = animal.dogsOk || 'sim';
  document.getElementById('catsOk').value = animal.catsOk || 'sim';
  document.getElementById('kidsOk').value = animal.kidsOk || 'sim';
  document.getElementById('specialCare').value = animal.specialCare || 'nao';
  document.getElementById('homeSuitable').value = animal.homeSuitable || 'qualquer';

  window.scrollTo({ top: document.getElementById('animalForm').offsetTop - 20, behavior: 'smooth' });
}

function deleteAnimal(id) {
  if (confirm('Tem certeza que deseja excluir este cadastro?')) {
    let animals = getAnimals().filter(a => a.id !== id);
    saveAnimals(animals);
    renderCatalogs();
    renderAdminList();
    showToast('Animal removido!');
  }
}

function renderLeadsList() {
  const leads = getLeads();
  const container = document.getElementById('leadsList');
  container.innerHTML = '';

  if (leads.length === 0) {
    container.innerHTML = '<p class="empty">Nenhum interesse registrado ainda.</p>';
    return;
  }

  leads.forEach(l => {
    const item = document.createElement('div');
    item.className = 'admin-row';
    item.innerHTML = `
      <div class="grow">
        <strong>Interesse em: ${l.animal}</strong>
        <p>Data: ${l.date}</p>
      </div>
    `;
    container.appendChild(item);
  });
}

// Backup JSON
document.getElementById('exportData').onclick = () => {
  const dataStr = JSON.stringify(getAnimals(), null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pacotinhos_portfolio_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  showToast('Backup do portfólio baixado!');
};

document.getElementById('importData').onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      const imported = JSON.parse(evt.target.result);
      if (Array.isArray(imported)) {
        saveAnimals(imported);
        renderCatalogs();
        renderAdminList();
        showToast('Dados importados com sucesso!');
      } else {
        alert('Formato de arquivo JSON inválido.');
      }
    } catch (err) {
      alert('Erro ao carregar arquivo de backup.');
    }
  };
  reader.readAsText(file);
};

// Toast de Notificação
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Inicializar aplicativo
renderCatalogs();
