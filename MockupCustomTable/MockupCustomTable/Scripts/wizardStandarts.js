var maxStep = $('.wizard-step').length;
var isOk = false;

$(function () {
    gotoStep(1);

    $('.wizard-previous').click(function () {
        var $this = $(this);
        $('#message').html(null);
        var currentStep = $('#wizard').data('active');
        if (currentStep > 1) {
            var newStep = gotoStep(currentStep - 1);
            if (newStep < maxStep) {
                $('.wizard-next').parent().show();
                $('.wizard-finish').parent().hide();
            }
        }
    });

});

function gotoStep(newStep) {
    $('.wizard-step').hide();
    $('div[data-step=' + newStep + ']').show();
    $('#wizard').data('active', newStep);

    var percent = parseInt((100 / maxStep) * newStep);
    $('.progress-bar').css('width', percent + '%');
    $('.progress-bar').html(newStep + '/' + maxStep);

    if (newStep > 1) {
        $('.wizard-previous').parent().show();
        blockCloseTab('Close this form?');
    } else {
        $('.wizard-previous').parent().hide();
    }

    return newStep;
}


function FocusOutRequiredCheck() {
    $(':input[required]').blur(function () {
        var $this = $(this);
        $this.parent().removeClass('has-error');
        if (String.isNullOrWhiteSpace($this.val())) {
            $this.parent().addClass('has-error');
            return false;
        }
        $('#message').html(null);
        return true;
    });
};

function EachAllRequiredCheck() {
    var result = true;
    $(':input[required]').each(function () {
        var $this = $(this);
        $this.parent().removeClass('has-error');
        if (String.isNullOrWhiteSpace($this.val())) {
            $this.parent().addClass('has-error');
            result = false;
        }
    });
    return result;
};

function CheckDuplicateName(sendingElement, isDuplicateObject, url, except) {
    if (typeof (except) === 'undefined') except = null;
    sendingElement.blur(function () {
        CheckDuplicateNameSync(sendingElement, isDuplicateObject, url, except);
    });
}

function CheckDuplicateNameSync(sendingElement, isDuplicateObject, url, except) {
    var input = sendingElement;

    if (typeof (except) != 'undefined') {
        $('#name_previously_used').remove();
        input.parent().removeClass('has-error');
        $('#message').html(null);
        if (input.val() == except) return true;
    }

    var isSuccess = false;
    input.parent().find('#name_previously_used').remove();
    if (!String.isNullOrWhiteSpace(input.val())) {
        input.parent().prepend('<div id="name_previously_used" class="pull-right"></div>');
        $.ajax({
            type: 'GET',
            url: url,
            data: { name: input.val(), objectId: isDuplicateObject.val() },
            beforeSend: function () {

            },
            success: function (r) {
                if (!r.IsOk) {
                    input.parent().addClass('has-error');
                    $('#name_previously_used').html(setDangerAlertMessage(window.namePrevUsed)).effect("shake", { times: 4 }, 1000);
                    $('#message').html(setDangerAlertMessage(window.namePrevUsed));
                    isSuccess = false;
                } else {
                    $('#name_previously_used').remove();
                    input.parent().removeClass('has-error');
                    $('#message').html(null);
                    isSuccess = true;
                }
            },
            error: function () {
                return false;
            },
            async: false
        });
    }
    return isSuccess;
}