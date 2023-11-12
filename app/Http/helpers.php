<?php


if(! function_exists('resultFunction')){
    function resultFunction($message, $status = false, $data = null){
        return [
            'status' => $status,
            'message' => $message,
            'data' => $data
        ];
    }
}

if(! function_exists('countryCodeToLabel')){
    function countryCodeToLabel($countryCode = ''){

        if ($countryCode == 'id') {
            return 'indonesia';
        } elseif ($countryCode == 'th') {
            return 'thailand';
        } elseif ($countryCode == 'my') {
            return 'malaysia';
        } elseif ($countryCode == 'ch') {
            return 'china';
        }

        return '';
    }
}

if(! function_exists('getMarkupFee')){
    function getMarkupFee($user){
        if ($user->shopper) {
            if (count($user->shopper->shopper_configurations) > 0) {
                $markupFee = $user->shopper->shopper_configurations->where('key_config', 'markup_fee')->first();
                if ($markupFee) {
                    return $markupFee->value_config;
                }
            }
        }

        return 0;
    }
}

if(! function_exists('getMarkupFeeFromShopper')){
    function getMarkupFeeFromShopper($domainUrl){
        $shopper = \App\Models\OlShopper::with([])->where('domain_url', $domainUrl)->first();
        if ($shopper) {
            if (count($shopper->shopper_configurations) > 0) {
                $markupFee = $shopper->shopper_configurations->where('key_config', 'markup_fee')->first();
                if ($markupFee) {
                    return $markupFee->value_config;
                }
            }
        }
        return 0;
    }
}

if(! function_exists('calculateMarkup')){
    function calculateMarkup($price, $markupFee){
        $handlingFee = 3 * $price / 100;
        $ppnHandlingFee = 10 * $handlingFee / 100;
        $bm = 7.5 * $price / 100;
        $ppn = 11 * ($price + $bm) / 100;
        $pph = 10 * ($price + $bm) / 100;
        $totalPrice = $price + $handlingFee + $ppnHandlingFee + $bm + $ppn + $pph;
        $totalPrice = ($markupFee * $totalPrice / 100) + $totalPrice;
        return $totalPrice;
    }
}

if(! function_exists('getDomainName')){
    function getDomainName($request){
        $domainUrl = $request->header('origin');
        $domainUrl = str_replace("https://", "", $domainUrl);
        return $domainUrl;
    }
}


if(! function_exists('getDomainNamePost')){
    function getDomainNamePost($url){
        $domainUrl = str_replace("https://", "", $url);
        $domainUrl = str_replace("http://", "", $url);
        return $domainUrl;
    }
}