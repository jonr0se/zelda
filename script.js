document.addEventListener('DOMContentLoaded', () => {
  const shrineList = [
    'Owa Daim Shrine',
    'Keh Namut Shrine',
    'Ja Baij Shrine',
    'Oman Au Shrine',
    'Kaam Ya\'tak Shrine',
    'Zalta Wa Shrine',
    'Shae Mo\'sah Shrine',
    'Rin Oyaa Shrine',
    'Daqo Chisay Shrine'
  ];

  const input = document.getElementById('shrineSearch');
  const list = document.getElementById('shrineList');

  function renderList(filtered) {
    list.innerHTML = '';
    filtered.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      list.appendChild(li);
    });
  }

  input.addEventListener('input', () => {
    const filtered = shrineList.filter(name =>
      name.toLowerCase().includes(input.value.toLowerCase())
    );
    renderList(filtered);
  });

  renderList(shrineList);
});
