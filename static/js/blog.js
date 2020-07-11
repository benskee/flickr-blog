// Sample blog
// Key:
// 7838204b247d74ecb730613d519b45ff

// Secret:
// a1f7f6643f23b499



const loadData = url => {
    $.get(url, data => {
        var pic = data.photos.photo
        $(column1).empty();
        $(column2).empty();
        $(column3).empty();
        
        for (var i = 0; i < pic.length; i++) {
            var currentPic = pic[i];
            var id = currentPic.id;
            var server = currentPic.server;
            var secret = currentPic.secret;

            var image = `<li class="list-group-item"><img class="img-fluid" src="http://farm66.static.flickr.com/${server}/${id}_${secret}.jpg"></li>`;
            
            if (i % 3 === 0) {
                $(column3).append(image)
            }
            else if (i % 2 === 0) {
                $(column2).append(image)
            }
            else{
                $(column1).append(image)
            };
        };
    });
};
  
$('#tag-form').on('submit', event => {
    event.preventDefault();
    var searchInput = $('#tagInput').val()
    
    var url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7838204b247d74ecb730613d519b45ff&tags=${searchInput}&format=json&nojsoncallback=1`
    
    loadData(url);
});