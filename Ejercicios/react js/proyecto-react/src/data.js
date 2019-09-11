import uuid from 'uuid/v4';

const columns = [
    {   
        id: uuid(),
        title: 'Para hacer DSJSA',
        cards: [
            {
                id: uuid(),
                title: 'Prueba 1',
                text: 'holis',
                tags:[
                    {
                        id: uuid(),
                        name: 'Maquetado',
                        color: '#2BA84A'
                    },
                    {
                        id: uuid(),
                        name: 'Desarrollo',
                        color: '#EF476F'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Prueba 2',
                text: 'asdukjs',
                tags: [
                    {
                        id: uuid(),
                        name: 'Maquetado',
                        color: '#2BA84A'
                    },
                    {
                        id: uuid(),
                        name: 'Desarrollo',
                        color: '#EF476F'
                    }

                ]
            }
        ]
    },
    {
        id: uuid(),
        title: 'Terminado',
        cards: [
            {   
                id: uuid(),
                title: 'Prueba 1',
                text: 'holis',
                tags: []
            },
            {
                id: uuid(),
                title: 'Prueba 2',
                text: 'asdukjs',
                tags: []
            }
        ]
    },
    {
        id: uuid(),
        title: 'a ver esto',
        cards: [
            {
                id: uuid(),
                title: 'Prueba 1',
                text: 'holis',
                tags: []
            },
            {
                id: uuid(),
                title: 'Prueba 2',
                text: 'asdukjs',
                tags: []
            }
        ]
    }
];

export default columns;