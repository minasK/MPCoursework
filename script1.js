
  $(document).ready(function () {/*this function adds items to the table when the user clicks "add movie", and also allows for sorting of the column movie name and genre by alphabetical order. */
  // jQuery button click event to add a row
    // jQuery button click event to add a row
    $('#addBtn').on('click', function () {
    var movieList = [];
    var genreList = [];
    var movieName = $('#movieNameInput').val(); /*set the value of the variable "moviename" to be equal to the value of the text input "#movieNameInput" */
    var genre = $('#genreInput').val(); /*same for the value genre */
    movieList.push(movieName); /*append the value of the "movieName" variable into the javascript array defined as "movieList" */
    genreList.push(genre); /*same for the value genre */
    
      
  if (movieName == '' || genre == '') { /*disallow blank entries when clicking "add movie" to protect the table from empty rows */
    alert('Please enter a movie name and genre.');
    return; 
  }

    /*lines 18-24 append the values found in the "movieList" and "movieGenre" arrays as table data in the table body */
    $('#tbody').append(`<tr>
      <td>${movieList}</td>
      <td>${genreList}</td>
      <td class="text-center">
        <button class="btn btn-danger remove" type="button">Remove</button>
      </td>
    </tr>`);

      // set the values of the text inputs "movienameInput" and "genreInput" to the empty string so that the user can easily add their next movie of choice to the table
      $('#movieNameInput').val('');
      $('#genreInput').val('');
    });

    // this function removes the closest tablerow to the remove button --this work fine because each row has its own remove button.
    $('#tbody').on('click', '.remove', function () {
      $(this).closest('tr').remove();
    });

    // Sort table by movie name
    $('#sortMovieName').on('click', function () {
      var table = $('#tbody');
      var rows = table.find('tr').get();

      rows.sort(function (a, b) {
        var movieNameA = $(a).find('td:nth-child(1)').text().toUpperCase();
        var movieNameB = $(b).find('td:nth-child(1)').text().toUpperCase(); 

        if (movieNameA < movieNameB) {
          return -1;
        }
        if (movieNameA > movieNameB) {
          return 1;
        }
        return 0;
      });

      $.each(rows, function (index, row) {
        table.append(row);
      });
    });

    // Sort table by genre
    $('#sortGenre').on('click', function () {
      var table = $('#tbody');
      var rows = table.find('tr').get();

      rows.sort(function (a, b) {
        var genreA = $(a).find('td:nth-child(2)').text().toUpperCase();
        var genreB = $(b).find('td:nth-child(2)').text().toUpperCase();

        if (genreA < genreB) {
          return -1;
        }
        if (genreA > genreB) {
          return 1;
        }
        return 0;
      });

      $.each(rows, function (index, row) {
        table.append(row);
      });
    });
  });
