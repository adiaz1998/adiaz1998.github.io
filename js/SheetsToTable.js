var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTPGbX3ep1lh0gHhp9wbH3jBMD52jQauWWWrARgys-AHOfQxS2xc0OACSUoe7yVYud1vARlUBL-ptBx/pubhtml';
				
		  $( document ).ready(function() {
        Tabletop.init( 
          {
            key: public_spreadsheet_url,
            callback: showInfo,
            wanted: [ "Sheet 1" ],
            simpleSheet: true
          } 
        );
			});

		  function showInfo(data) {
			
			var tableHead = '<table class="table table-bordered table-striped"><thead><tr><td>Date</td><td>Value</td></tr></thead><tbody>';
			var tableTail = '</tbody></table>';
			
			var tableRows = '';
			
			$.each(data, function( index, value ) {
        //var meditationSuccess = '';
        console.log(value)
        if(value.Wert == 'Ja') {
          tableRows += '<tr class="success"><td>' + value.Datum + '</td><td>Yes</td></tr>';
        }
        else {
          tableRows += '<tr class="danger"><td>' + value.Datum + '</td><td>No</td></tr>';
        }
				
			});
			
      //$('#tbl tbody:last').after(tableRows);
			$('#output').html(tableHead + tableRows + tableTail);
			
		  }