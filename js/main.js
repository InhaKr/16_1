// "use strict";

// ДЗ 12. #16_1
// Создать вертикальное или горизонтальное (в зависимости от свойства type)
//  меню, в котором будут элементы из свойства items.
// Inner items - выпадающее меню при наведении мышки.
// [OPTIONAL] handler - хранит название функции, которая
//  выполнится при нажатии на пункт меню.
const data = {
  name: 'menu',
  type: 'row|column',
  items: [{
      title: 'title 1',
      handler: 'ActionAdd'
    },
    {
      title: 'title 2',
      booms: [{
          title: 'in 1'
        },
        {
          title: 'in 2'
        }
      ]
    },
    {
      title: 'title 3',
      handler: 'ActionExit'
    }
  ]
};

class OurRenderer {

  static RenderDeepList(target, source) {
    // if (target || source.length === 0) {
    //   return
    // }
    const element = document.createElement('ul');

    for (let key in data) {
      console.log(key)
      if (key === 'items') {
        data.items.forEach((elem) => {

          // console.log(elem);
          const li = document.createElement('li');

          li.classList.add('li-item');
          // console.log(li)
          if (elem.handler !== undefined) {
            li.innerHTML = elem.handler;
          }
          element.appendChild(li);

          console.log(elem)

        })
      }
      let r = data.items
      console.log(r);
      let w;
      let q;
      for (let i = 0; i < r.length; i++) {
        w = r[i];
        console.log(w)
        for (key in w) {
          q = key;
          console.log(q);
          console.log(w[q]);

        }
      }
      const ul = document.createElement('ul')
      ul.classList.add('li-ul1')

      if (q = 'booms') {
        for(key in q) {
          console.log(q[key])
        }
        const li1 = document.createElement('li');
        li1.classList.add('li-item1');
        li1.innerHTML = 'inner 1';

        ul.appendChild(li1);
        element.appendChild(ul)
      }


    }
    target.appendChild(element)
  }
}


OurRenderer.RenderDeepList(document.body, data);