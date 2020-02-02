<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{{title}}</title>
    <meta charset="UTF-8">
    <meta http-quiv="Content-Type" content='text/html; charset=utf-8'>
    <meta name="viewport" constent="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="id=edge">
    <style>
      body {
        margin: 30px;
      }
      a {
        display: block;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
{{#each files}}
    <a href="{{../dir}}/{{file}}">[{{icon}}]{{file}}</a>
{{/each}}
  </body>
</html>
