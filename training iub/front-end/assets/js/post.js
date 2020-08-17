 $("#register_form").submit(function (e) {
    var formObj = $(this);
    var formURL = formObj.attr("action");
    var formData = new FormData(this);
    $.ajax({
        url: formURL,
        type: 'POST',
        data: formData,
        mimeType: "multipart/form-data",
        contentType: false,
        cache: false,
        processData: false,
        success: function (data, textStatus, jqXHR) {

            function isJSON(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (isJSON(data)) {
                var message = JSON.parse(data);
                alert(message['message']);
            } else {
                alert(data);
                location = "http://hope.sisc.ro"
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
    e.preventDefault(); //Prevent Default action. 
});
$("#multiform").submit(); //Submit the form