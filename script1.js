
  $(document).ready(function () {
    // jQuery button click event to add a row
    $('#addBtn').on('click', function () {
   $('#addBtn').on('click', function () {
    var movieList = [];
    var genreList = [];
    var movieName = $('#movieNameInput').val();
    var genre = $('#genreInput').val();
    movieList.push(movieName);
    genreList.push(genre);
    
      
  if (movieName == '' || genre == '') {
    alert('Please enter a movie name and genre.');
    return; 
  }

    
    $('#tbody').append(`<tr>
      <td>${movieList}</td>
      <td>${genreList}</td>
      <td class="text-center">
        <button class="btn btn-danger remove" type="button">Remove</button>
      </td>
    </tr>`);

      // clear input fields
      $('#movieNameInput').val('');
      $('#genreInput').val('');
    });

    // function to remove row closest 
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
