
export function init() {
    // Задаём точки мультимаршрута.
    var pointA = [55.788942, 37.679967],
        pointB = [55.796742, 37.716457],
        pointC = [55.798682, 37.695816];

    var multiRoute1 = new window.ymaps.multiRouter.MultiRoute({
            referencePoints: [
                pointA,
                pointC
            ],
            params: {
                routingMode: 'masstransit'
            }
        }, {
            boundsAutoApply: true
        });

        var multiRoute2 = new window.ymaps.multiRouter.MultiRoute({
            referencePoints: [
                pointB,
                pointC
            ],
            params: {
                routingMode: 'masstransit'
            }
        }, {
            boundsAutoApply: true
        });


    var myMap = new window.ymaps.Map('map', {
        center: [55.798682, 37.695816],
        zoom: 7
    }, {
        buttonMaxWidth: 300
    });

    myMap.geoObjects.add(multiRoute1).add(multiRoute2);
    
}

