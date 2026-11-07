// Banco de dados inicial pré-carregado
const initialAnimals = [
  {
    id: '1',
    name: 'Mel',
    species: 'cachorro',
    age: '2 anos',
    sex: 'Fêmea',
    size: 'medio',
    animalAge: 'adulto',
    group: 'Resgatados de SP',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    story: 'Mel foi encontrada vagando perto de um parque. É uma cadelinha extremamente dócil e alegre.',
    personality: 'Carinhosa, brincalhona, ama correr ao ar livre e faz amizade rápido.',
    care: 'Precisa de passeios diários para gastar energia.',
    info: 'Vacinada, castrada e vermifugada.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'casa quintal'
  },
  {
    id: '2',
    name: 'Thor',
    species: 'cachorro',
    age: '4 anos',
    sex: 'Macho',
    size: 'grande',
    animalAge: 'adulto',
    group: 'Resgatados de SP',
    animalEnergy: 'calmo',
    photo: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    story: 'Thor é um urso carinhoso. Apesar do tamanho, é super tranquilo e ama dormir aos pés do tutor.',
    personality: 'Calmo, protetor, companheiro e muito pacífico.',
    care: 'Gosta de caminhadas leves e de um cantinho macio para descansar.',
    info: 'Castrado e com vacinas em dia.',
    dogsOk: 'sim',
    catsOk: 'nao',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  },
  {
    id: '3',
    name: 'Pipoca',
    species: 'gato',
    age: '1 ano',
    sex: 'Fêmea',
    size: 'pequeno',
    animalAge: 'adulto',
    group: 'Ninhada Felina',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    story: 'Pipoca é uma gatinha resgatada ainda filhote. Adora perseguir bolinhas de papel e escalar arranhadores.',
    personality: 'Curiosa, esperta, companheira e brincalhona.',
    care: 'Moradia precisa ter redes de proteção nas janelas.',
    info: 'Castrada, testada FIV/FELV negativa.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'apartamento'
  },
  {
    id: '4',
    name: 'Oliver',
    species: 'gato',
    age: '5 meses',
    sex: 'Macho',
    size: 'pequeno',
    animalAge: 'filhote',
    group: 'Ninhada Sol',
    animalEnergy: 'ativo',
    photo: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
    story: 'Oliver é um filhotinho dócil e extremamente manhoso. Adora ronronar no colo.',
    personality: 'Manhoso, afetuoso e companheiro.',
    care: 'Requer atenção e brinquedos interativos.',
    info: 'Primeira dose da vacina aplicada.',
    dogsOk: 'sim',
    catsOk: 'sim',
    kidsOk: 'sim',
    specialCare: 'nao',
    homeSuitable: 'qualquer'
  }
];

// Gerenciamento de Estado
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

// Navegação entre Abas
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

// Renderização dos Catálogos
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
        <p>${animal.sex || 'Sexo não informado'} · ${animal.age || 'Idade não informada'}</p>
        <p><strong>Porte:</strong> ${animal.size || 'Não informado'}</p>
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
    (a.group && a.group.toLowerCase().includes(query))
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

// Página de Perfil do Animal
function openProfile(id) {
  const animals = getAnimals();
  const animal = animals.find(a => a.id === id);
  if (!animal) return;

  const profileContent = document.getElementById('profileContent');
  profileContent.innerHTML = `
    <img src="${animal.photo || 'https://via.placeholder.com/600x400?text=Sem+Foto'}" alt="${animal.name}">
    <div class="profile-inner">
      <h2>${animal.name}</h2>
      <p class="profile-meta">${animal.species.toUpperCase()} · ${animal.sex || 'Sexo n/i'} · ${animal.age || 'Idade n/i'} · Porte ${animal.size || 'n/i'}</p>
      
      <h3>História</h3>
      <p>${animal.story || 'História não informada.'}</p>
      
      <h3>Personalidade</h3>
      <p>${animal.personality || 'Não informada.'}</p>

      <h3>Cuidados e Necessidades</h3>
      <p>${animal.care || 'Sem cuidados especiais relatados.'}</p>

      <h3>Informações de Saúde / Vacinação</h3>
      <p>${animal.info || 'Não informadas.'}</p>

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
  showToast(`Interesse em ${animalName} registrado! Redirecionando para o WhatsApp...`);
  
  const text = encodeURIComponent(`Olá! Gostaria de mais informações sobre o processo de adoção do(a) ${animalName}.`);
  setTimeout(() => {
    window.open(`https://wa.me/5511940436900?text=${text}`, '_blank');
  }, 1200);
}

// Teste de Compatibilidade
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
  resultsContainer.innerHTML = '<h3>Seus melhores matches:</h3>';

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

  matches.forEach(m => {
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

// Área de Acesso / Admin
document.getElementById('volunteerEnter').onclick = () => {
  showToast('Modo voluntário ativado. Você pode navegar pelos cadastros!');
  switchTab('home');
};

document.getElementById('adminLogin').onsubmit = (e) => {
  e.preventDefault();
  const pass = document.getElementById('adminPassword').value;
  if (pass === '2026') {
    showToast('Acesso administrativo concedido!');
    switchTab('admin');
    renderAdminList();
    renderLeadsList();
  } else {
    showToast('Senha incorreta!');
  }
};

document.getElementById('logout').onclick = () => {
  switchTab('access');
  showToast('Sessão encerrada.');
};

// Cadastro e Edição de Animais
document.getElementById('animalForm').onsubmit = (e) => {
  e.preventDefault();

  const id = document.getElementById('animalId').value || Date.now().toString();
  const fileInput = document.getElementById('photo');
  const photoUrlInput = document.getElementById('photoUrl').value;

  function processSave(photoData) {
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
      photo: photoData || photoUrlInput || 'https://via.placeholder.com/300x200?text=Sem+Foto',
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

    saveAnimals(animals);
    showToast('Animal salvo com sucesso!');
    document.getElementById('animalForm').reset();
    document.getElementById('animalId').value = '';
    renderCatalogs();
    renderAdminList();
  }

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (evt) => processSave(evt.target.result);
    reader.readAsDataURL(fileInput.files[0]);
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

// Backup JSON (Exportar / Importar)
document.getElementById('exportData').onclick = () => {
  const dataStr = JSON.stringify(getAnimals(), null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pacotinhos_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  showToast('Backup exportado com sucesso!');
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
        alert('Formato de arquivo inválido.');
      }
    } catch (err) {
      alert('Erro ao carregar o arquivo JSON.');
    }
  };
  reader.readAsText(file);
};

// Notificações Toast
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Inicialização da Aplicação
renderCatalogs();
