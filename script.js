const read = (k, d) => {
  try {
    return JSON.parse(localStorage.getItem(k)) ?? d;
  } catch {
    return d;
  }
};
const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const uid = () => Math.random().toString(36).slice(2, 10);
const brl = (n) =>
  Number(n).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const seed = [
  {
    id: "s1",
    userId: "demo",
    title: "iPhone 15 Pro 256GB",
    brand: "Apple",
    price: 6499,
    condition: "Seminovo",
    description: "Titânio natural, bateria 94%, com caixa.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwh_mqvyxFCbxZ8Zgz8eRZEhuHggLfxEbxiiSxYsRlQ&s=10",
  },
  {
    id: "s2",
    userId: "demo",
    title: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 5899,
    condition: "Novo",
    description: "Lacrado, 512GB, garantia de 1 ano.",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
  },
  {
    id: "s3",
    userId: "demo",
    title: "Xiaomi Redmi Note 13",
    brand: "Xiaomi",
    price: 1299,
    condition: "Novo",
    description: "128GB, câmera de 108MP.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
  },
  {
    id: "s4",
    userId: "demo",
    title: "Motorola Edge 40",
    brand: "Motorola",
    price: 1899,
    condition: "Seminovo",
    description: "Tela curva, ótimo estado.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    id: "s5",
    userId: "demo",
    title: "Motorola Moto G17",
    brand: "Motorola",
    price: 1015,
    condition: "Seminovo",
    description: "Tela curva, ótimo estado.",
    image:
      "https://brmotorolanew.vtexassets.com/arquivos/ids/177598-800-auto?v=639052259631500000&width=800&height=auto&aspect=true",
  },
  {
    id: "s6",
    userId: "demo",
    title: "Motorola Razr 70",
    brand: "Motorola",
    price: 4999,
    condition: "Seminovo",
    description: "Tela curva, ótimo estado.",
    image:
      "https://brmotorolanew.vtexassets.com/arquivos/ids/181926/RAZR70_1000X1000PX_01.png?v=639229399942230000",
  },
  {
    id: "s7",
    userId: "demo",
    title: "Samsung Galaxy A17 5G ",
    brand: "Sansung",
    price: 899,
    condition: "Seminovo",
    description: "Tela curva, ótimo estado.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/br/sm-a376bzajzto/gallery/br-galaxy-a37-5g-sm-a376-sm-a376bzajzto-551722947?$1164_776_PNG$",
  },
  {
    id: "s8",
    userId: "demo",
    title: "Galaxy z Fold8",
    brand: "Sansung",
    price: 6400,
    condition: "Seminovo",
    description: "Tela curva, ótimo estado.",
    image:
      "https://m.media-amazon.com/images/I/51wYvr-k9oL.jpg",
  },
    {
    id: "s9",
    userId: "demo",
    title: "iPhone 18 Pro",
    brand: "Apple",
    price: 11999,
    condition: "Seminovo",
    description: "Tela curva, ótimo estado.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-202609-6-9inch-silver_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=ODB3TEdtbk8ybkd3clM3dWVML3VCYTBPcjFUQzN2eEEzbTlaeVZmVmk4TVRqUkJqUGFyN1pGMnlaV3JkWU9jdmt2eHZoNkptSExvWXZRTnR6aG9wVFNzRVdVYUZMK2pnb0pYa1BITFFSbEwxcjBVRyswWG14bEI4WVZBcUIybEZJK1psK05SazlodkZTTS9iTFZuZkpn&traceId=1",
  },
    {
    id: "s10",
    userId: "demo",
    title: "iPhone 18 Pro Max 256GB",
    brand: "Apple",
    price: 12999,
    condition: "Novo",
    description: "Lacrado, com nota fiscal e 1 ano de garantia Apple.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-202609-6-9inch-silver_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=ODB3TEdtbk8ybkd3clM3dWVML3VCYTBPcjFUQzN2eEEzbTlaeVZmVmk4TVRqUkJqUGFyN1pGMnlaV3JkWU9jdmt2eHZoNkptSExvWXZRTnR6aG9wVFNzRVdVYUZMK2pnb0pYa1BITFFSbEwxcjBVRyswWG14bEI4WVZBcUIybEZJK1psK05SazlodkZTTS9iTFZuZkpn&traceId=1",
  },
  {
    id: "s11",
    userId: "demo",
    title: "Galaxy S26 Ultra 256GB",
    brand: "Samsung",
    price: 6653,
    condition: "Novo",
    description: "5G, 12GB de RAM, câmera de 200MP, tela de 6,9 polegadas.",
    image:
      "https://www.oficinadanet.com.br/media/obj_item/2283/381/s26-ultra.jpg",
  },
  {
    id: "s12",
    userId: "demo",
    title: "Galaxy Z Flip8 256GB",
    brand: "Samsung",
    price: 6636,
    condition: "Novo",
    description: "Dobrável flip, 12GB de RAM, Android 17 e 7 anos de atualizações.",
    image:
      "https://www.oficinadanet.com.br/media/post/71690/330/galaxyzflip8-5.jpg",
  },
  {
    id: "s13",
    userId: "demo",
    title: "Motorola Razr 70 Ultra 512GB",
    brand: "Motorola",
    price: 4499,
    condition: "Novo",
    description: "Dobrável flip, Snapdragon 8 Elite, 12GB de RAM, Android 16.",
    image:
      "https://www.oficinadanet.com.br/media/obj_item/2308/381/razr70ultra.jpg",
  },
  {
    id: "s14",
    userId: "demo",
    title: "Motorola Edge 70 Pro",
    brand: "Motorola",
    price: 3399,
    condition: "Novo",
    description: "5G, câmeras de 50MP, Android 16, lacrado e com garantia.",
    image:
      "https://www.oficinadanet.com.br/media/obj_item/2303/381/motorola-edge70.jpg",
  },
  {
    id: "s15",
    userId: "demo",
    title: "Xiaomi Redmi Note 15 Pro 5G",
    brand: "Xiaomi",
    price: 2149,
    condition: "Novo",
    description: "Câmera de 200MP, bateria de 6580 mAh, tela AMOLED 120Hz.",
    image:
      "https://www.oficinadanet.com.br/media/obj_item/2179/268/redmi-note15-5g-pro.jpg",
  },
];
const db = {
  users: () =>
    read("cel_users", [
      {
        id: "demo",
        name: "Loja Demo",
        email: "demo@celular.com",
        password: "demo",
        city: "Fortaleza",
        bio: "",
      },
    ]),
  ads: () => read("cel_ads", seed),
  me() {
    const id = read("cel_session", null);
    return this.users().find((u) => u.id === id) || null;
  },
  favs: (u) => (u ? read("cel_favs_" + u.id, []) : []),
};
const app = document.getElementById("app");
let view = "home",
  filters = { q: "", brand: "", cond: "" };

function go(v) {
  const me = db.me();
  view = !me && v !== "home" ? "login" : v;
  document.getElementById("nav").classList.remove("open");
  render();
}
document
  .querySelectorAll("[data-go]")
  .forEach((b) => (b.onclick = () => go(b.dataset.go)));
document.getElementById("burger").onclick = () =>
  document.getElementById("nav").classList.toggle("open");
document.getElementById("authBtn").onclick = () => {
  if (db.me()) {
    localStorage.removeItem("cel_session");
    go("home");
  } else go("login");
};

function toggleFav(id) {
  const me = db.me();
  if (!me) return go("login");
  const f = db.favs(me);
  write(
    "cel_favs_" + me.id,
    f.includes(id) ? f.filter((x) => x !== id) : [...f, id],
  );
  render();
}
function openBuy(id) {
  const me = db.me();
  if (!me) return go("login");
  const a = db.ads().find((x) => x.id === id);
  const m = document.createElement("div");
  m.className = "modal";
  m.onclick = (e) => {
    if (e.target === m) m.remove();
  };
  m.innerHTML = `<form class="form" id="bf"><h2>Finalizar compra</h2><div class="sum"><b>${esc(a.title)}</b><b>${brl(a.price)}</b></div>
 <input required name="name" value="${esc(me.name)}" placeholder="Nome completo"><input required name="address" placeholder="Endereço de entrega">
 <select name="payment"><option>Pix</option><option>Cartão de crédito</option><option>Boleto</option></select>
 <button class="btn full">Confirmar compra</button><button type="button" class="link" id="bc">Cancelar</button></form>`;
  document.body.appendChild(m);
  m.querySelector("#bc").onclick = () => m.remove();
  m.querySelector("#bf").onsubmit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    const o = {
      ...d,
      id: uid(),
      adId: a.id,
      title: a.title,
      price: a.price,
      createdAt: Date.now(),
    };
    write("cel_orders_" + me.id, [o, ...read("cel_orders_" + me.id, [])]);
    m.innerHTML = `<div class="form" style="text-align:center"><div style="font-size:2.5rem">✓</div><h2>Pedido confirmado!</h2><p class="desc">${esc(a.title)} · ${brl(a.price)} via ${esc(d.payment)}. Veja em Perfil › Minhas compras.</p><button class="btn full" id="ok">Fechar</button></div>`;
    m.querySelector("#ok").onclick = () => {
      m.remove();
      render();
    };
  };
}
function removeAd(id) {
  write(
    "cel_ads",
    db.ads().filter((a) => a.id !== id),
  );
  render();
}

function grid(ads, empty, canDelete) {
  if (!ads.length) return `<p class="empty">${empty}</p>`;
  const favs = db.favs(db.me());
  return `<div class="grid">${ads
    .map(
      (
        a,
      ) => `<article class="card"><div class="img">${a.image ? `<img src="${esc(a.image)}" alt="${esc(a.title)}" loading="lazy">` : ""}
 <button class="fav" onclick="toggleFav('${a.id}')">${favs.includes(a.id) ? "♥" : "♡"}</button></div>
 <div class="body"><div class="meta"><span>${esc(a.brand)}</span><span class="tag">${esc(a.condition)}</span></div>
 <h3>${esc(a.title)}</h3><p class="desc">${esc(a.description)}</p>
 <div class="row"><span class="price">${brl(a.price)}</span>${canDelete ? `<button class="del" onclick="removeAd('${a.id}')">Excluir</button>` : ""}</div>${canDelete ? "" : `<button class="btn full buy" onclick="openBuy('${a.id}')">Comprar</button>`}</div></article>`,
    )
    .join("")}</div>`;
}

function homeList() {
  const { q, brand, cond } = filters;
  return db
    .ads()
    .filter(
      (a) =>
        (a.title + a.description).toLowerCase().includes(q.toLowerCase()) &&
        (!brand || a.brand === brand) &&
        (!cond || a.condition === cond),
    );
}

function render() {
  const me = db.me();
  document.getElementById("authBtn").textContent = me ? "Sair" : "Entrar";
  document
    .querySelectorAll("[data-go]")
    .forEach((b) => b.classList.toggle("active", b.dataset.go === view));
  if (view === "home") {
    const brands = [...new Set(db.ads().map((a) => a.brand))];
    app.innerHTML = `<section class="hero"><h1>Compre e venda celulares com simplicidade.</h1><p>Novos e seminovos, direto de quem vende.</p><button class="btn" onclick="go('new')">Anunciar meu celular</button></section>
  <div class="filters"><input id="q" placeholder="Pesquisar anúncios…" value="${esc(filters.q)}">
  <select id="brand"><option value="">Todas as marcas</option>${brands.map((b) => `<option ${b === filters.brand ? "selected" : ""}>${esc(b)}</option>`).join("")}</select>
  <select id="cond"><option value="">Qualquer estado</option>${["Novo", "Seminovo"].map((c) => `<option ${c === filters.cond ? "selected" : ""}>${c}</option>`).join("")}</select></div>
  <div id="list">${grid(homeList(), "Nenhum anúncio encontrado.")}</div>`;
    const upd = () => {
      filters = { q: q.value, brand: brand.value, cond: cond.value };
      document.getElementById("list").innerHTML = grid(
        homeList(),
        "Nenhum anúncio encontrado.",
      );
    };
    const q = document.getElementById("q"),
      brand = document.getElementById("brand"),
      cond = document.getElementById("cond");
    q.oninput = upd;
    brand.onchange = upd;
    cond.onchange = upd;
  } else if (view === "login") {
    let mode = "in";
    const draw = () => {
      app.innerHTML = `<form class="form" id="f"><h2>${mode === "in" ? "Entrar" : "Criar conta"}</h2>
  ${mode === "up" ? `<input required name="name" placeholder="Nome">` : ""}
  <input required type="email" name="email" placeholder="E-mail"><input required type="password" minlength="4" name="password" placeholder="Senha">
  <p class="err" id="err"></p><button class="btn full">${mode === "in" ? "Entrar" : "Cadastrar"}</button>
  <button type="button" class="link" id="sw">${mode === "in" ? "Não tem conta? Cadastre-se" : "Já tem conta? Entrar"}</button></form>`;
      document.getElementById("sw").onclick = () => {
        mode = mode === "in" ? "up" : "in";
        draw();
      };
      document.getElementById("f").onsubmit = (e) => {
        e.preventDefault();
        const d = Object.fromEntries(new FormData(e.target));
        const us = db.users();
        if (mode === "in") {
          const u = us.find(
            (x) => x.email === d.email && x.password === d.password,
          );
          if (!u) return (err.textContent = "E-mail ou senha inválidos");
          write("cel_session", u.id);
        } else {
          if (us.some((x) => x.email === d.email))
            return (err.textContent = "E-mail já cadastrado");
          const u = { id: uid(), ...d, city: "", bio: "" };
          write("cel_users", [...us, u]);
          write("cel_session", u.id);
        }
        go("home");
      };
    };
    draw();
  } else if (view === "new") {
    app.innerHTML = `<form class="form" id="f"><h2>Novo anúncio</h2><input required name="title" placeholder="Modelo (ex: iPhone 13 128GB)">
  <div class="three"><input required name="brand" placeholder="Marca"><input required type="number" min="1" name="price" placeholder="Preço (R$)"><select name="condition"><option>Novo</option><option>Seminovo</option></select></div>
  <input name="image" placeholder="URL da foto (opcional)"><textarea required rows="4" name="description" placeholder="Descrição"></textarea><button class="btn full">Publicar anúncio</button></form>`;
    document.getElementById("f").onsubmit = (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(e.target));
      write("cel_ads", [
        { ...d, price: Number(d.price), id: uid(), userId: me.id },
        ...db.ads(),
      ]);
      go("profile");
    };
  } else if (view === "favs") {
    const f = db.favs(me);
    app.innerHTML = `<h2>Meus favoritos</h2>${grid(
      db.ads().filter((a) => f.includes(a.id)),
      "Você ainda não favoritou nenhum celular.",
    )}`;
  } else if (view === "profile") {
    app.innerHTML = `<div class="profile"><form class="form" id="f"><div class="avatar">${esc(me.name[0]?.toUpperCase())}</div>
  <input name="name" value="${esc(me.name)}" placeholder="Nome"><input name="city" value="${esc(me.city)}" placeholder="Cidade">
  <textarea name="bio" rows="3" placeholder="Sobre você">${esc(me.bio)}</textarea><p class="small">${esc(me.email)}</p><button class="btn full" id="sv">Salvar perfil</button></form>
  <section><h2>Meus anúncios</h2>${grid(
    db.ads().filter((a) => a.userId === me.id),
    "Você ainda não publicou anúncios.",
    true,
  )}
  <h2 style="margin-top:32px">Minhas compras</h2>${(() => {
    const os = read("cel_orders_" + me.id, []);
    return os.length
      ? os
          .map(
            (o) =>
              `<div class="order"><b>${esc(o.title)}</b><span class="small">${esc(o.payment)} · ${new Date(o.createdAt).toLocaleDateString("pt-BR")}</span><b>${brl(o.price)}</b></div>`,
          )
          .join("")
      : '<p class="small">Nenhuma compra ainda.</p>';
  })()}</section></div>`;
    document.getElementById("f").onsubmit = (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(e.target));
      write(
        "cel_users",
        db.users().map((u) => (u.id === me.id ? { ...u, ...d } : u)),
      );
      render();
      document.getElementById("sv").textContent = "Salvo ✓";
    };
  }
}
render();
