
  $(document).ready(function () {/*this function adds items to the table when the user clicks "add movie", and also allows for sorting of the column movie name and genre by alphabetical order. */
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
    $('#sortMovieName').on('click', function () { <!-- on click event handler. when clicked:  -->
      var table = $('#tbody'); <!-- table = id tbody table -->
      var rows = table.find('tr').get(); <!-- finds all the table rows (assigning them to var rows) within the table element (tr inside the thead) and retrieves them as an array using the .get method. -->

      // sort the rows according to movie name
      rows.sort(function (a, b) { <!--  this line sorts the rows (line 40) based on the comparison of the movie names. The sort function takes a comparison function that compares the movie names extracted from the table cells. -->
        var movieNameA = $(a).find('td:nth-child(1)').text().toUpperCase(); <!-- in movieNameA we assign a movie name row. As parameter a, we use find method which returns the descendant element of the selected element (like child, grandchild etc...), (explain also nth-child) and make it as text of the html element. the upper case is used to make sure there will be a case-insensitive comparison   -->
        var movieNameB = $(b).find('td:nth-child(1)').text().toUpperCase(); <!-- same is done for movieNameB but b is used so that we compare them and make the sorting -->

        if (movieNameA < movieNameB) {
          return -1; <!-- the actual sorting is happening here and -1 indicates that parameter 'a' should be placed before 'b' -->
        }
        if (movieNameA > movieNameB) {
          return 1; <!-- likewise but 'a' in this case is placed after 'b' -->
        }
        return 0; <!-- here nothing changes since they are already in the same alphanumeric order -->
      });

      $.each(rows, function (index, row) { <!-- this iterates over the sorted rows using the 'each' function. each allows the iteration (like for loop) over objects or arrays and in this case 'rows'. the function that is executed for each row, takes index and row parameters that represents (index) the current item in the arrays and (row) current row being processed. -->
        table.append(row); <!-- the table element in the tbody where the rows will be appended -->
      });
    });

    // Sort table by genre
    $('#sortGenre').on('click', function () {
      var table = $('#tbody');
      var rows = table.find('tr').get();

      rows.sort(function (a, b) { <!-- same goes for genre as it did for movie name -->
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
