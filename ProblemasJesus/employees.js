const departments = [
    {
        id: 'design',
        name : 'Departamento de Diseño Gráfico'
    },
    {
        id: 'accounting',
        name: 'Departamento de Contabilidad y Compras'
    },
    {
        id: 'dev',
        name: 'Departamento de Desarrollo de Aplicaciones'
    }

];

const employees = [
    {
        id: 3,
        name: 'Antonio González',
        departmentId: 'design'
    },
    {
        id: 4,
        name: 'Javier Blanch',
        departmentId: 'dev'
    },
    {
        id: 8,
        name: 'Nacho García',
        departmentId: 'dev'
    }
];

const departmentById = {};

for (let i=0; i< departments.length; i++) {
    const dep = departments[i];
    departmentById[dep.id] = dep;
}

console.log(departmentById);