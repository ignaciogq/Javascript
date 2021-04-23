const items = [
    {
      "Name": "Item 1",
      "Value": 20,
      "Children": [
        {
          "Name": "Item 1.1",
          "Value": 30,
          "Children": [
            {
              "Name": "Item 1.1.1",
              "Value": 25,
              "Children": [ ]
            },
            {
              "Name": "Item 1.1.2",
              "Value": 32,
              "Children": [ ]
            },
            {
              "Name": "Item 1.1.3",
              "Value": 18,
              "Children": [ ]
            }
          ]
        },
        {
          "Name": "Item 1.2",
          "Value": 15,
          "Children": [
            {
              "Name": "Item 1.2.1",
              "Value": 9,
              "Children": [ ]
            },
            {
              "Name": "Item 1.2.2",
              "Value": 13,
              "Children": [ ]
            },
            {
              "Name": "Item 1.2.3",
              "Value": 16,
              "Children": [ ]
            }
          ]
        }
      ]
    },
    {
      "Name": "Item 2",
      "Children": [
        {
          "Name": "Item 2.1",
          "Value": 16,
          "Children": [
            {
              "Name": "Item 2.1.1",
              "Value": 16,
              "Children": [ ]
            },
            {
              "Name": "Item 2.1.2",
              "Value": 16,
              "Children": [ ]
            },
            {
              "Name": "Item 2.1.3",
              "Value": 16,
              "Children": [ ]
            }
          ]
        }
      ]
    }
  ];


/* function renderItems(items, parent){
    const ul = document.createElement('ul');
    for (let item of items) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = item.Name;

        li.appendChild(span);
        ul.appendChild(li);

        renderItems(item.Children, li);
    }
    parent.appendChild(ul);
}

const treeViewDiv = document.getElementById('tree-view');

renderItems(items, treeViewDiv); */



function renderItemsAndSumValues(items, parent) {

  const ul = document.createElement('ul');
  let sum = 0;
  for (let item of items) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = item.Name;
    li.appendChild(span);
    ul.appendChild(li);
    if (item.Value !== undefined) {
      sum += item.Value;
    }
    
    sum += renderItemsAndSumValues(item.Children, li);
    
  }
  parent.appendChild(ul);
  return sum;
}

const treeViewDiv = document.getElementById('tree-view');
const sum = renderItemsAndSumValues(items, treeViewDiv);
console.log(sum);

  

