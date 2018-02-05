let update = document.querySelector('.update');
let pravila = document.querySelector('.pravila');
let rezultati = document.querySelector('.rezultati');
pravila.addEventListener('click',function(){
  update.innerHTML = `
  <h3 class="text-center">Pravila igre !</h3>
  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
  `
});
rezultati.addEventListener('click',function(){
  update.innerHTML=`
  <h3 class="text-center">Najboljih 5 rezultata</h3>
  <table class="table table-striped table-inverse ">
  <thead>
    <tr>
      <th>#</th>
      <th>Username</th>
      <th>Rezultat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
  `
})
