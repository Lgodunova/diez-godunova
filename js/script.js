 // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(createYandexMap);

    function createYandexMap(){ 
        // Создание карты.    
        let myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчнию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.942093, 30.279444],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });

        let myPlacemark = new ymaps.Placemark([59.942093, 30.279444], {
            hintContent   : 'Содержимое всплывающей подсказки',
            balloonContent: 'Желтая метка',
        }, {
            iconLayout    : 'default#image',
            iconImageClipRect: [[0,0], [26, 47]],
            iconImageHref: 'images/',
            // ВСТАВИТЬ спрайт МЕТКИ
            iconImageSize: [15, 27],
            iconImageOffset: [-15, -27],
            //подкрутить размер
        });

        // После того как метка была создана, ее
        // можно добавить на карту.
        myMap.geoObjects.add(myPlacemark);
    }