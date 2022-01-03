window.addEventListener('load', loadHendler);

function loadHendler() {
    var category = document.querySelector("#category");
    var subCategory = document.querySelector("#sub-category");
    var dataCategory = document.querySelector("#data");
    var previousCategoryData = new Object();

    var subCategoryValues = {
        books: {
            0: "Horror",
            1: "Fantsty",
            2: "Love story",
            3: "History"
        },

        sport: {
            0: "Bascetbol",
            1: "Footbol",
            2: "Hockey",
            3: "Box"
        },

        movies: {
            0: "Horror",
            1: "Fantsty",
            2: "Drama",
            3: "Comedy"
        },

        food: {
            0: "Ukrainian",
            1: "Asian",
            2: "Fastfood",
            3: "Italian",
            4: "Georgian"
        },

        treveling: {
            0: "Ukrainian",
            1: "Asian",
            2: "Fastfood",
            3: "Italian",
            4: "Georgian"
        },

        sleep: {
            0: "On your bed",
            1: "On your side",
            2: "At home",
            3: "At guest"
        }
    }

    category.addEventListener('change', getCategory);
    subCategory.addEventListener('change', getCategory);

    function getCategory(e) {
        switch (e.target.name) {
            case 'category': {
                setCascadeData(subCategoryValues, subCategory, e.target);
            }  break;
            case 'subCategory': {
                createData();
                setCascadeData(data, dataCategory, e.target);
            } break;
        }
    }

    function setCascadeData(parentCategoryList, childCategory, elem) {
        var selectedCategory = parentCategoryList[elem.value.toLowerCase()];
        previousCategoryData = Object.assign({}, selectedCategory);

        childCategory.options.length = 1;

        Object.values(selectedCategory).forEach(element => {
            childCategory.insertAdjacentHTML(
                'beforeend',
                `<option value="${element}">${element}</option>`)
        });
    }

    function createData() {
        var dataObj = new Object();
        

        for (var pd in previousCategoryData) {
            var myData = '';
            for (var i = 0; i < 4; i++) {
                d += getRandomInt(65, 90); 
            }

            dataObj[pd] = myData;
        }

        return dataObj;
    }

    function getRandomInt(min, max) {
        return String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
    }
}