 const placeHolderDiv = document.getElementById("modalPlaceHolder");
 const btnAdd = document.getElementById("btnAdd");
 btnAdd.addEventListener("click", function () {
            fetch('/Category/Add').then(function (response) {
                return response.text();
            }).then(function (data) {
                placeHolderDiv.innerHTML = data;
                placeHolderDiv.querySelector(".modal").classList.add('show', 'd-block');
                const btnCls = placeHolderDiv.querySelector(".btnCls");
                btnCls.addEventListener("click", function () {
                    placeHolderDiv.querySelector(".modal").classList.remove('show', 'd-block');
                });
            });
        });