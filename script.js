




console.log("Diseño cargado correctamente.");

const areas = [
    {
      id: 1,
      name: "Salud",
      xp: 0,
      level: 1,
      habits: [
        {
          id: 1,
          name: "Entrenamiento Físico",
          effort: 8,
          xp: 15,
          coins: 15
        },
        {
          id: 2,
          name: "Comer Balanceadamente",
          effort: 6,
          xp: 10,
          coins: 10
        },
        {
          id: 3,
          name: "Beber 3 litros de agua",
          effort: 4,
          xp: 6,
          coins: 6
        },
        {
          id: 4,
          name: "Dormir 7-8 horas",
          effort: 7,
          xp: 15,
          coins: 15
        },
        {
          id: 5,
          name: "Revisiones médicas/dentales",
          effort: 3,
          xp: 5,
          coins: 5
        },
        {
          id: 6,
          name: "Meditación 10 minutos",
          effort: 4,
          xp: 10,
          coins: 10
        },
        {
          id: 7,
          name: "Lavarme los dientes después de comer",
          effort: 2,
          xp: 5,
          coins: 5
        },
        {
          id: 8,
          name: "Bañarme 1 vez al día",
          effort: 1,
          xp: 5,
          coins: 5
        },
        {
          id: 9,
          name: "Skin Care Mañana y Noche",
          effort: 3,
          xp: 5,
          coins: 5
        },
        {
          id: 10,
          name: "Lavar la cara con hielo",
          effort: 2,
          xp: 5,
          coins: 5
        },
        {
          id: 11,
          name: "Ejercicios de Cara",
          effort: 7,
          xp: 13,
          coins: 13
        }
      ]
    },
    {
      id: 2,
      name: "Familia",
      xp: 0,
        level: 1,
      habits: [
        {
          id: 1,
          name: "Saludar a Familiares Semanalmente",
          effort: 3,
          xp: 5,
          coins: 5
        },
        {
          id: 2,
          name: "Mostrar gratitud",
          effort: 4,
          xp: 10,
          coins: 10
        },
        {
          id: 3,
          name: "Limpiar el Tercer Piso",
          effort: 9,
          xp: 20,
          coins: 20
        },
        {
          id: 4,
          name: "Limpiar baño mensualmente",
          effort: 5,
          xp: 10,
          coins: 10
        },
        {
          id: 5,
          name: "Limpiar cuarto semanalmente",
          effort: 5,
          xp: 10,
          coins: 10
        },
        {
          id: 6,
          name: "Limpiar algo diferente de la casa",
          effort: 6,
          xp: 10,
          coins: 10
        },
        {
          id: 7,
          name: "Mantener cuarto limpio diario",
          effort: 3,
          xp: 5,
          coins: 5
        }
      ]
    },
    {
      id: 3,
      name: "Relaciones Amorosas",
      xp: 0,
        level: 1,
      habits: [
        {
          id: 1,
          name: "Habla con 3 desconocidos",
          effort: 7,
          xp: 15,
          coins: 15
        },
        {
          id: 2,
          name: "Mantén postura erguida todo el día",
          effort: 8,
          xp: 15,
          coins: 15
        },
        {
          id: 3,
          name: "Haz 2 preguntas abiertas",
          effort: 5,
          xp: 10,
          coins: 10
        },
        {
          id: 4,
          name: "Inicia una conversación con una observación",
          effort: 3,
          xp: 5,
          coins: 5
        },
        {
          id: 5,
          name: "5 minutos de respiración",
          effort: 5,
          xp: 10,
          coins: 10
        },
        {
          id: 6,
          name: "3 series de Kegel x 10",
          effort: 6,
          xp: 10,
          coins: 10
        }
      ]
    },
    {
        id: 4,
        name: "Desarrollo Intelectual",
        xp: 0,
        level: 1,
        habits: [
          {
            id: 1,
            name: "Leer 10 páginas diarias",
            effort: 5,
            xp: 10,
            coins: 10
          },
          {
            id: 2,
            name: "1-2h/semana cursos en línea",
            effort: 7,
            xp: 15,
            coins: 15
          },
          {
            id: 3,
            name: "Escribir reflexiones/diario",
            effort: 5,
            xp: 10,
            coins: 10
          },
          {
            id: 4,
            name: "Ejercicios mentales disruptivos",
            effort: 8,
            xp: 15,
            coins: 15
          }
        ]
      },
      {
        id: 5,
        name: "Carrera / Estudios",
        xp: 0,
        level: 1,
        habits: [
          {
            id: 1,
            name: "Asistir a seminarios/webinars mensualmente",
            effort: 5,
            xp: 10,
            coins: 10
          },
          {
            id: 2,
            name: "Dedicar 1h de Idiomas",
            effort: 6,
            xp: 10,
            coins: 10
          },
          {
            id: 3,
            name: "Conectar con 1 persona nueva de tu área",
            effort: 6,
            xp: 10,
            coins: 10
          },
          {
            id: 4,
            name: "Practicar técnicas Pomodoro",
            effort: 4,
            xp: 10,
            coins: 10
          }
        ]
      },
      {
        id: 6,
        name: "Finanzas",
        xp: 0,
        level: 1,
        habits: [
          {
            id: 1,
            name: "Presupuesto mensual",
            effort: 6,
            xp: 10,
            coins: 10
          },
          {
            id: 2,
            name: "Apartar 10-20% ingresos",
            effort: 5,
            xp: 10,
            coins: 10
          },
          {
            id: 3,
            name: "Leer curso/libro de finanzas",
            effort: 7,
            xp: 15,
            coins: 15
          },
          {
            id: 4,
            name: "Iniciar inversiones básicas",
            effort: 8,
            xp: 15,
            coins: 15
          },
          {
            id: 5,
            name: "Priorizar pago de deudas altas",
            effort: 6,
            xp: 10,
            coins: 10
          }
        ]
      },
      {
        id: 7,
        name: "Negocio Propio",
        xp: 0,
        level: 1,
        habits: [
          {
            id: 1,
            name: "Implementar herramientas que automaticen",
            effort: 8,
            xp: 15,
            coins: 15
          },
          {
            id: 2,
            name: "Revisar ingresos, gastos, márgenes semanal",
            effort: 7,
            xp: 15,
            coins: 15
          },
          {
            id: 3,
            name: "Gestionar documentación",
            effort: 8,
            xp: 15,
            coins: 15
          },
          {
            id: 4,
            name: "Programar aplicaciones web",
            effort: 8,
            xp: 15,
            coins: 15
          }
        ]
      },
      {
        id: 8,
        name: "Creatividad",
        xp: 0,
        level: 1,
        habits: [
          {
            id: 1,
            name: "Proyecto creativo fuera de responsabilidades",
            effort: 7,
            xp: 15,
            coins: 15
          },
          {
            id: 2,
            name: "Probar algo nuevo cada mes",
            effort: 8,
            xp: 15,
            coins: 15
          }
        ]
      }
    ];
 
const user = {
        name: "Fabrizio",
        hp: 1000,
        coins: 0,
        currentRank: "Recluta 1"
      };
      
const ranks = [
        { id: 1, name: "Recluta 1" },
        { id: 2, name: "Recluta 2" },
        { id: 3, name: "Recluta 3" },
        { id: 4, name: "Soldado 1" },
        { id: 5, name: "Soldado 2" },
        { id: 6, name: "Soldado 3" },
        { id: 7, name: "Cabo 1" },
        { id: 8, name: "Cabo 2" },
        { id: 9, name: "Cabo 3" },
        { id: 10, name: "Sargento 1" },
        { id: 11, name: "Sargento 2" },
        { id: 12, name: "Sargento 3" },
        { id: 13, name: "Teniente 1" },
        { id: 14, name: "Teniente 2" },
        { id: 15, name: "Teniente 3" },
        { id: 16, name: "Capitán" },
        { id: 17, name: "Coronel" },
        { id: 18, name: "General Supremo" },
        // etc. o incluso podrías manejarlo con un objeto más complejo
];


const badhabits = [
    {
      "id": 1,
      "name": "Dormir tarde y levantarse tarde",
      "penalty": 200
    },
    {
      "id": 2,
      "name": "No hacer ejercicio",
      "penalty": 200
    },
    {
      "id": 3,
      "name": "Consumir dulces teniendo resistencia a la insulina",
      "penalty": 200
    },
    {
      "id": 4,
      "name": "No bañarte diariamente",
      "penalty": 200
    },
    {
      "id": 5,
      "name": "Permanecer en cama más de 2 horas leyendo manwha o ver series por más de 3 horas",
      "penalty": 200
    }
  
];

const shophabits = [
  {
    "id": 1,
    "name": "Jugar videojuegos 2 horas",
    "cost": 50
  },
  {
    "id": 2,
    "name": "Full Day de Alcohol con Amigos / Familia",
    "cost": 100
  },
  {
    "id": 3,
    "name": "Noche de Maratón de Series",
    "cost": 100
  },
  {
    "id": 4,
    "name": "Chocolate y Dulces por un Día",
    "cost": 120
  },
  {
    "id": 5,
    "name": "Recuperar 100 HP",
    "cost": 200
  }
]


    // Cargar áreas en el selector
    const areaSelect = document.getElementById("area-select");
    const habitsContainer = document.getElementById("habits-container");

    areas.forEach((area) => {
      const option = document.createElement("option");
      option.value = area.id;
      option.textContent = area.name;
      areaSelect.appendChild(option);
    });

    // Mostrar hábitos según área seleccionada
    function renderHabits() {
      const selectedArea = areas.find(
        (area) => area.id === parseInt(areaSelect.value, 10)
      );

      habitsContainer.innerHTML = "";

      selectedArea.habits.forEach((habit) => {
        const card = document.createElement("div");
        card.className = "habit-card";

        const title = document.createElement("div");
        title.className = "habit-title";
        title.textContent = habit.name;

        const rewards = document.createElement("div");
        rewards.className = "habit-rewards";

        const xpDiv = document.createElement("div");
        xpDiv.className = "icon green";
        xpDiv.textContent = `+${habit.xp} XP`;

        const coinsDiv = document.createElement("div");
        coinsDiv.className = "icon gold";
        coinsDiv.textContent = `+${habit.coins} monedas`;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.value = habit.id;

        rewards.appendChild(xpDiv);
        rewards.appendChild(coinsDiv);

        card.appendChild(title);
        card.appendChild(rewards);
        card.appendChild(checkbox);

        habitsContainer.appendChild(card);
      });
    }

    function renderBadHabits() {
      const habitsContainer = document.getElementById("habits-container");
      habitsContainer.innerHTML = "";
    
      badhabits.forEach((habit) => {
        const card = document.createElement("div");
        card.className = "habit-card";
    
        const title = document.createElement("div");
        title.className = "habit-title";
        title.textContent = habit.name;
    
        const penalty = document.createElement("div");
        penalty.className = "habit-penalty";
        penalty.textContent = `Penalidad: - ${habit.penalty} HP`;
    
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.value = habit.id;
    
        card.appendChild(title);
        card.appendChild(penalty);
        card.appendChild(checkbox);
    
        habitsContainer.appendChild(card);
      });
    }

    function applyPenalties() {
      const checkedHabits = document.querySelectorAll(".checkbox:checked");
      let totalPenalty = 0;
    
      checkedHabits.forEach((checkbox) => {
        const habit = badhabits.find(
          (habit) => habit.id === parseInt(checkbox.value, 10)
        );
        totalPenalty += habit.penalty;
      });
    
      user.hp -= totalPenalty;
    
      // Asegurar que el HP no sea menor que 0
      if (user.hp < 0) user.hp = 0;
    
      alert(`Penalidades aplicadas. HP restante: ${user.hp}`);
    
      saveData(); // Guardar datos actualizados en localStorage
      renderBadHabits(); // Actualizar interfaz
    }
    
    function renderShopHabits() {
      const habitsContainer = document.querySelector(".habits-container");
      habitsContainer.innerHTML = "";
    
      shophabits.forEach((habit) => {
        const card = document.createElement("div");
        card.className = "habit-card";
    
        const title = document.createElement("div");
        title.className = "habit-title";
        title.textContent = habit.name;
    
        const cost = document.createElement("div");
        cost.className = "habit-cost";
        cost.textContent = `Costo: ${habit.cost} monedas`;
    
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.value = habit.id;
    
        card.appendChild(title);
        card.appendChild(cost);
        card.appendChild(checkbox);
    
        habitsContainer.appendChild(card);
      });
    }
    
    function buyShop() {
      const checkedItems = document.querySelectorAll(".checkbox:checked");
      let totalCost = 0;
    
      checkedItems.forEach((checkbox) => {
        const shopItem = shophabits.find(
          (item) => item.id === parseInt(checkbox.value, 10)
        );
    
        if (user.coins >= shopItem.cost) {
          user.coins -= shopItem.cost;
    
          // Si el ID del artículo es 5, restaura 100 HP
          if (shopItem.id === 5) {
            user.hp += 100;
            if (user.hp > 1000) user.hp = 1000; // Limitar el HP a un máximo de 1000
          }
    
          alert(`Compraste: ${shopItem.name}`);
        } else {
          alert(`No tienes suficientes monedas para comprar: ${shopItem.name}`);
        }
      });
    
      saveData(); // Guardar datos actualizados en localStorage
      updateUserStats(); // Actualizar estadísticas en la UI
      renderShopHabits(); // Refrescar la tienda
    }
    
    
    function handleUpload() {
      const selectedArea = areas.find(
        (area) => area.id === parseInt(areaSelect.value, 10)
      );
    
      const checkedHabits = document.querySelectorAll(".checkbox:checked");
      let totalXP = 0;
    
      checkedHabits.forEach((checkbox) => {
        const habit = selectedArea.habits.find(
          (habit) => habit.id === parseInt(checkbox.value, 10)
        );
        totalXP += habit.xp;
        user.coins += habit.coins; // Aumentar monedas del usuario por cada hábito completado
      });
    
      selectedArea.xp += totalXP;
    
      // Lógica de subida de nivel
      while (selectedArea.xp >= selectedArea.level * 500) {
        selectedArea.xp -= selectedArea.level * 500; // Restar el exceso de XP
        selectedArea.level++; // Incrementar nivel
      }
    
      alert(
        `Área: ${selectedArea.name}\nNivel: ${selectedArea.level}\nXP Actual: ${selectedArea.xp}\nXP Máxima para siguiente nivel: ${selectedArea.level * 500}`
      );
    
      saveData(); // Guardar datos actualizados en localStorage
      updateUserStats(); // Actualizar estadísticas del usuario en la interfaz
      renderHabits(); // Volver a renderizar los hábitos
    }
    

    function saveData() {
      const data = {
        areas: areas,
        user: user
      };
      localStorage.setItem("userData", JSON.stringify(data));
    }

    function loadData() {
      const savedData = localStorage.getItem("userData");
      if (savedData) {
        const { areas: savedAreas, user: savedUser } = JSON.parse(savedData);
        Object.assign(areas, savedAreas);
        Object.assign(user, savedUser);
      }
    }
    
 
 

    
    // Inicializar
    areaSelect.addEventListener("change", renderHabits);
    // Inicialización
    loadData(); // Cargar datos guardados
    updateUserStats(); // Mostrar estadísticas del usuario
    renderHabits(); // Renderizar hábitos según el área seleccionada
    
    
 
    function resetData() {
      // Restaurar valores iniciales de las áreas
      areas.forEach((area) => {
        area.xp = 0;
        area.level = 1;
      });
    
      // Restaurar valores iniciales del usuario
      user.hp = 1000;
      user.coins = 0;
      user.currentRank = "Recluta 1";
    
      // Guardar los datos restaurados en localStorage
      saveData();
    
      // Actualizar la interfaz con los datos iniciales
      alert("Todos los datos han sido reiniciados.");
      updateUserStats(); // Actualizar la UI de monedas
      renderHabits();
    }
    
    
    // Asociar el botón de reinicio con la función resetData
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetData);
    
    function updateUserStats() {
      const userCoins = document.getElementById("user-coins");
      const userHp = document.getElementById("user-hp");
    
      if (userCoins) {
        userCoins.textContent = `Monedas: ${user.coins}`;
      }
    
      if (userHp) {
        userHp.textContent = `HP: ${user.hp}`;
      }
    }
    
  
    function renderAreaChart() {
      const canvas = document.getElementById("areaChart");
      if (!canvas) {
        console.error("El elemento 'areaChart' no existe en el DOM.");
        return;
      }
      
      const ctx = canvas.getContext("2d");
      
      // Extraer nombres de áreas y experiencia acumulada
      const areaNames = areas.map((area) => area.name);
      const areaXP = areas.map((area) => area.xp);
    
      // Crear el gráfico con Chart.js
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: areaNames,
          datasets: [
            {
              label: "Experiencia por Área",
              data: areaXP,
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
                "#FF6384",
                "#36A2EB",
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  const value = tooltipItem.raw;
                  return `${value} XP`;
                },
              },
            },
          },
        },
      });
    }
    
    