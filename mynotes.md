# Form Component'in geliştirilmesi

- app'imizi 2 parçaya bölerek yapacağız. bir list kısmı bir de form kısmı. ilk önce contacts kısmına bakalım. src/components içerisine Contacts/contacts.jsx dosyamızı rafce ile oluşturduk.

- şimdi Contacts componentini de 2 parçaya böleceğiz ve her birini yine contacts içerisindeki contacts.jsx'e import edeceğiz. Form ve List isminde Contacts altında 2 klasör oluşturduk ve her birisine birer jsx dosyası açıp rafce ile alt componentlerimizi oluşturup bir üst component'e import ettik.

- Form kısmı ile başlayalım: form kapsayıcı div içerisinde isim ve numara için formlarımızı oluşturduk ve ikisini de alt alta gelmesi için farklı divlere aldık. butonumuzu da ekledik.
- Bu oluşturduğumuz butona bastığımızda bir eventi tetiklememiz gerekir. Yani kişiyi kaydedecek. useState'i import ederek bu buton için bir state yazacağız. bununla beraber bir input alanı değiştiğinde bunun state'e atamasını sağlayacak bir fonksiyon yazacağız.

```jsx
// components/form/form.jsx

  //state'i tanımladık
  const [form, setForm] = useState(
    { 
      fullname: "", phone_number: ""
    }
  )

  //state'e atama yapacak fonksiyonu yazıyoruz.
  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    // ...form ile form'u olduğu gibi aldık ve e.target.value olarak yeni değer atadık.
  }
```

- bu işlemleri yaptıktan sonra formlarımıza onChange olarak bu fonksiyonu gireceğiz. böylece inputlarımıza değer girebiliyoruz. 

- sırada butonumuzun submit durumunda yapacağı işlemle ilgili fonksiyonu yazmak var. kapsayıcı form tag'i içerisine on submit durumunda kullanacağımız fonksiyonu atıyoruz. fonksiyonumuzun içerisinde preventDefault ile butona tıkladığımızda sayfanın yenilenmesini engelliyoruz ve clg ile eklediğimiz bilgiyi console'da görebiliyoruz.

- yine submit fonksiyonumuza isim ya da numara boş gönderildiğinde console'a uyarı vermesi için bir kontrol ekliyoruz.

```jsx
  const onSubmit = (e) => {
    // sayfa yenilemesini engellemek için preventDefault kullanıyoruz.
    e.preventDefault();

    // eğer form içerisindeki fullname ya da phone_number boş ise 
    if (form.fullname === ''|| form.phone_number === ''){
      return (
        false, 
        console.log("lütfen ilgili alanları doldurunuz."));
    };

    console.log(form);
  }
```

- contacts.jsx'e geri dönelim. buraya useState'i import ediyoruz. buraya az önce yaptığımız kayıtları tutacak state'i tanımlayacağız. fakat öncesinde burada bulunan Form componentine addContact isimli bir prop verelim ve bu prop'ı Form.jsx'e gönderelim.

- useEffect ile bu contacts'a bir atama yapıldığında son halini görmeye çalışalım. fakat burada bir problem var: ikinci bir kişi eklediğimizde ilk eklediğimizi göstermeyecek. çünkü form'un önceki halini korumadık. bunu çözmek için yine Form.jsx'e bir prop göndereceğiz. ve bu prop'u addcontact prop'unun içerisine ...contacts,form olarak vereceğiz.

- sıradaki işlem form'u doldurup submit ettikten sonra formun temizlenmesi işlemini yapalım. Form.jsx'deki inputlarımıza value atayacağız. {form.fullname} ve {form.phone_number}

- onSubmit fonksiyonumuzun en alt kısmına setForm ekleyerek değişiklik yapıldıktan sonra görmek istediğimiz ifadeleri yapabiliriz. setForm({fullname:"", phone_number:""}) ile submit ettiğimizde ikisi de boş string olarak geri gelecektir.






















