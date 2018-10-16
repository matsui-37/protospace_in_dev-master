// $(function(){
//   //画像ファイルプレビュー表示のイベント追加 fileを選択時に発火するイベントを登録
//   $('form').on('change', 'input[type="file"]', function(e) {
//     var file = e.target.files[0],
//         reader = new FileReader(),
//         // ユーザーのコンピュータ内にあるファイル(もしくはバッファー上の生データ)をWebアプリケーションから非同期的に読み込める。読み込むファイルやデータはFileないしBlobオブジェクトとして指定。
//         $preview = $(".preview");
//         $preview1 = $(".preview1");

//     // 画像ファイル以外の場合は何もしない
//     if(file.type.indexOf("image") < 0){
//       return false;
//     }
//     // ファイル読み込みが完了した際のイベント登録
//     reader.onload = (function(file) {
//       return function(e) {
//         //既存のプレビューを削除
//         $preview.empty();
//         $preview1.empty();
//         // .prevewの領域の中にロードした画像を表示するimageタグを追加
//         $preview.append($('<img>').attr({
//                   src: e.target.result,
//                   width: "40%",
//                   class: "preview",
//                   title: file.name
//               }));
//         $preview1.append($('<img>').attr({
//                   src: e.target.result,
//                   width: "60%",
//                   class: "preview1",
//                   title: file.name
//               }));
//       };
//     })(file);
//   $()
//     reader.readAsDataURL(file);
//   });
// });


$(function(){
  $('.cover-image-upload').change(function(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    var IdentifiedImg = $(this).children("img")
    console.log(IdentifiedImg)
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }

    reader.onload = (function(file){
      return function(e){
        IdentifiedImg.attr("src", e.target.result);
        IdentifiedImg.attr("title", file.name);
      };
    })(file);
    reader.readAsDataURL(file);
  });
});

// sub_image_uploaderをそれぞれ特定するためにIDを付与する関数
$(function(){
  $('.sub_imageuploader').each(function(e){
    i = 1 + i;
    $(this).attr("id", 'image${i}');
  });
});

$(function(){
  $('.sub_image_uploader').change(function(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    var IdentifiedImg = $(this).children("img")
    console.log(IdentifiedImg)
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }

    reader.onload = (function(file){
      return function(e){
        IdentifiedImg.attr("src", e.target.result);
        IdentifiedImg.attr("title", file.name);
      };
    })(file);
    reader.readAsDataURL(file);
  });
});












// $(function(){
//   //画像ファイルプレビュー表示のイベント追加 fileを選択時に発火するイベントを登録
//   $('form').on('change', 'input[type="file"]', function(e) {
//     var file = e.target.files[0],
//         reader = new FileReader(),
//         // ユーザーのコンピュータ内にあるファイル(もしくはバッファー上の生データ)をWebアプリケーションから非同期的に読み込める。読み込むファイルやデータはFileないしBlobオブジェクトとして指定。
//         $preview = $(".preview");
//         $preview1 = $(".preview1");

//     // 画像ファイル以外の場合は何もしない
//     if(file.type.indexOf("image") < 0){
//       return false;
//     }
//     // ファイル読み込みが完了した際のイベント登録
//     reader.onload = (function(file) {
//       return function(e) {
//         //既存のプレビューを削除
//         $preview.empty();
//         $preview1.empty();
//         // .prevewの領域の中にロードした画像を表示するimageタグを追加
//         $preview.append($('<img>').attr({
//                   src: e.target.result,
//                   width: "40%",
//                   class: "preview",
//                   title: file.name
//               }));
//         $preview1.append($('<img>').attr({
//                   src: e.target.result,
//                   width: "60%",
//                   class: "preview1",
//                   title: file.name
//               }));
//       };
//     })(file);
//   $()
//     reader.readAsDataURL(file);
//   });
// });
