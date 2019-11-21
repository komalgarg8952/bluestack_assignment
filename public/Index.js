var app = angular.module("manageCampaigns", ['ngMaterial', 'ngMessages']);


app.controller("campaignsController", function ($scope, $sce) {

    var date = new Date();
    var dateString = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
    $scope.todayDate = new Date(dateString).getTime();
    $scope.upcomingTab = true;
    $scope.activeBtn = 0;

    var campaginsStringEnglish= {
        "close":"Close",
        "week":"Week",
        "year":"Year",
        "month":"Month",
        "pricing":"Pricing",
        "pricingModal":"Pricing Report",
        "playBigger":"Play Bigger",
        "changeLanguage":"Change Language",
        "heading":"Manage Campaigns",
        "lang":"ENGLISH",
       "tabArray": [
           { id: 1, value: "Upcomings Campaigns" },
           { id: 2, value: "Live Campaigns" },
           { id: 3, value: "Past Campaigns" }
       ],
       "tableHeader": [{ id: 1, "title": "DATE" }, { id: 2, "title": "CAMPAIGN" }, { id: 3, "title": "VIEW" }, { id: 4, "title": "ACTIONS" }, { id: 5, "title": "" }, { id: 6, "title": "" }],
       "jsondata": [{
           "name": "Matching Pattern",
           "region": "US",
           "createdOn": 1387843260000,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard/Row Copy 2-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Super Jewels Quest",
           "region": "CA, FR",
           "createdOn": 1559806715124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard/Row Copy 3-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Contra Slayer",
           "region": "FR",
           "createdOn": 1559806711124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 3-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Contra Slayer",
           "region": "FR",
           "createdOn": $scope.todayDate,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 3-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Mancala Mix",
           "region": "JP",
           "createdOn": $scope.todayDate,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Mancala Mix",
           "region": "JP",
           "createdOn": 1559806680124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Mancala Mix",
           "region": "JP",
           "createdOn": 1559806680124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Mancala Mix",
           "region": "JP",
           "createdOn": 1559809734124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Mancala Mix",
           "region": "JP",
           "createdOn": 1559809714124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },{
           "name": "Mancala Mix",
           "region": "JP",
           "createdOn": 1699907915124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Mancala Mix",
           "region": "JP",
           "createdOn": 1699907915124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Mancala Mix",
           "region": "JP",
           "createdOn": 1699907915124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Mancala Mix",
           "region": "JP",
           "createdOn": 1699907915124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Mancala Mix",
           "region": "JP",
           "createdOn": 1999907995124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
           "timeDiff":""
       },
       {
           "name": "Mancala Mix",
           "region": "JP",
           "createdOn": 1899907915124,
           "price": "View Pricing",
           "csv": "CSV",
           "report": "Report",
           "schedule":"Schedule Again",
           "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
           "timeDiff":""
       }
       ]
      

   };
    var campaginsStringGerman = {
        "close":"Schließen",
        "week":"Woche",
        "year":"Jahr",
        "month":"Monate",
        "pricing":"Preisgestaltung",
        "pricingModal":"Preisbericht",
        "playBigger":"Größer spielen",
        "changeLanguage":"Sprache ändern",
        "heading":"Kampagnen verwalten",
        "lang":"GERMAN",
        "tabArray": [
            { id: 1, value: "Upcomings-Kampagnen" },
            { id: 2, value: "Live-Kampagnen" },
            { id: 3, value: "Vergangene Kampagnen" }
        ],
        "tableHeader": [{ id: 1, "title": "DATUM" }, { id: 2, "title": "KAMPAGNE" }, { id: 3, "title": "AUSSICHT" }, { id: 4, "title": "AKTIONEN" }, { id: 5, "title": "" }, { id: 6, "title": "" }],
        "jsondata": [{
            "name": "Passendes Muster",
            "region": "UNS",
            "createdOn": 1387843260000,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard/Row Copy 2-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
        {
            "name": "Super Jewels Quest",
            "region": "CA, FR",
            "createdOn": 1559806715124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard/Row Copy 3-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
        {
            "name": "Gegenjäger",
            "region": "FR",
            "createdOn": 1559806711124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 3-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
        {
            "name": "Gegenjäger",
            "region": "FR",
            "createdOn": $scope.todayDate,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Report",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 3-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
        {
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": $scope.todayDate,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Report",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
        {
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": 1559806680124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
        {
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": 1559806680124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
        {
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": 1559809734124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
        {
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": 1559809714124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
        {
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": 1699907915124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
        {
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": 1699907915124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
        {
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": 1699907915124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },{
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": 1699907915124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },{
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": 1999907995124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
            "timeDiff":""
        },
		{
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": 1899907915124,
            "price": "Preise anzeigen",
            "csv": "CSV",
            "report": "Bericht",
            "schedule":"Erneut planen",
            "image_url": "Resources/Page 1/Dashboard-2/Row Copy 6-Row/Thumb/Bitmap.png",
            "timeDiff":""
        }
        ]
       

    };

    $scope.campaginsString = campaginsStringEnglish;
    $scope.onChangeLanguage = function () {
        if ($scope.campaginsString.lang === "ENGLISH") {

            $scope.campaginsString = campaginsStringGerman;

        } else {
            $scope.campaginsString = campaginsStringEnglish;
        }
        date_diff_indays();
    };
    date_diff_indays();

    function date_diff_indays(date1, date2, index) {
        var date1 = new Date(date1);
        var date2 = new Date(date2);

        for (var i = 0; i < $scope.campaginsString.jsondata.length; i++) {
            var date1 = new Date($scope.campaginsString.jsondata[i].createdOn);
            var date2 = new Date($scope.todayDate);
            var diffTime = Math.abs(date2 - date1);
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            $scope.campaginsString.jsondata[i].timeDiff = diffDays;
        }


    };
    $scope.onClickCampaigns = function (campID, index) {
        $scope.activeBtn = index;
        if (campID === 1) {
            $scope.upcomingTab = true;
            $scope.liveCamp = false;
            $scope.pastCamp = false;
        } else if (campID === 2) {
            $scope.liveCamp = true;
            $scope.pastCamp = false;
            $scope.upcomingTab = false;
        } else {
            $scope.liveCamp = false;
            $scope.pastCamp = true;
            $scope.upcomingTab = false;
        }
    }


    $scope.dataChanged = function (selectedDate, indexOfRow) {
        // var selectedDate = new Date();
        selectedDate = selectedDate.getMonth() + "/" + selectedDate.getDate() + "/" + selectedDate.getFullYear();
        selectedDate = new Date(selectedDate).getTime();
        var date1 = new Date(selectedDate);
        var date2 = new Date($scope.todayDate);
        var diffTime = Math.abs(date2 - date1);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


        for (var i = 0; i < $scope.campaginsString.jsondata.length; i++) {
            if (indexOfRow === i) {
                $scope.campaginsString.jsondata[i].createdOn = selectedDate;
                $scope.campaginsString.jsondata[i].timeDiff = diffDays;
                break;
            }
        }




    }
    $scope.openModalOfCSV = function (rowData) {
        modal.style.display = "block";
        $scope.modalImageUrl = rowData.image_url;
        $scope.modalCampaignName = rowData.name;
        $scope.modalRegion = rowData.region;


    }
    // Get the modal
    var modal = document.getElementById("myModal");



    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    $scope.closeModal = function () {
        modal.style.display = "none";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }




});