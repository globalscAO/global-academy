import { ProductsInterface } from "../interfaces/ProductsInterface";

export const productsData: ProductsInterface[] = [
  {
    id: 1,
    coverImg:
      "https://global-services-corporation.github.io/images/academy/gestao-estrategica.jpg",
    title: "Gestão Estratégica de Organizações",
    workload: "30h",
    teaching: [
      {
        id: 1,
        description:
          "É uma figura política e economista angolana. Foi Ministro das Finanças de Junho de 1990 a abril de 1992. Presidente do Banco Africano de Investimento (com início em 1996) e como Governador do Banco Central de 1999 a 2002. Posteriormente, foi Vice-Primeiro Ministro. É também ex-aluno da London School of Economics.",
        imgUrl:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhUSExMVFRUVFRUVFRUSFRYVFRYVFRcXFhUSFRcYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGC0dHx0uKysrLSstLS0tLS0tKy0tLS0rLSstKy0tLS0tKy0tLS0tLS0tKy0tLS01LS0tMC0rK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBgQFBwj/xABBEAABAwEEBwUFBgUDBQEAAAABAAIRAwQSITEFBkFRYXGRBxMigaEyUrHB8BQjQmJy0TNDgpKyU+HxFWOiwtIk/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACoRAQEAAgEDAwIGAwEAAAAAAAABAhEDEiExBDJBIlEFEzNhgbFCcfAj/9oADAMBAAIRAxEAPwDq6VEJYXM2AQhEqQJUkolAFY1vHgPJZJcoLY4XSk8oqk6NMOHA/NdSZkOS5ZZRDj+o/FdRsxlreQ+C7+b4c+KVJKVCwXCEKC22ttJjqjyGtYC5xOwBAlttbKLHVKjgxjRLnOMABct1p7UyZp2MQMu9eMSMvA3ZzPRVnXTWqrb6v4m0mk93TxAjY94n2z6Ks2ei55hoJEnGJiPr1S2RMm2Tb9K1qxvVHue73nuJjkFjt58YW7smq9eoZayRdvTsA49FiP0Y9pi6RGfnkI2+apc15ha14rOG3orJq5rtarJDQ7vGDOm+SPLaPLotVV0A8+wI5/ACMlLZtAPIxAHDyzlZ/nY/drODP7O26sa1Uba3wm7UHtU3EXv1DeFvlyfQep9RzG1qL+7qsM4HaPdw+sVfNXdLuqTQrgNtNNoL2j2XtPs1ae9pjyOCvL8srNN60pbyaE5oVooLyLyfdRCnSCQlhKhSGwiE5CaDbqQtT0igRQkhTXUl1RpO0MITyEKE7acEpyeAlhY6abRpYKfCUBToR3SgtUkIhNCEsKitFPwlZUJlRuBSG1FYIe4fmK6ZYHTTZ+lvwXNagiq8fmXRdDumjT/SF38vtjmx8s1CELBcLmPazprFllDoAipV4z7DT6noumlcB1+tF63WiZJ7wNHJoj4INT3d4wADMASMRw3T+6uuq2rIL2XojMicuE7VUtH07xHXHGXHbw3K56HthBMYRljtXPnnI6ePjt8Oj0bNTpNutaANvFVvS1kpyXNYCTOz6+glo6Xv4Ewd6gr2nA7PUqmfJMovhx3Gq3aKRByTGHJbC1HGViArjsd0vZY9BaVLCBhu3SsnSNcPIr0x99QlzQMS6mf4lHjIkj8wCqYqRtKns1pcx4eDOOIO5dPHy2dnJycMt26fZqwe1rxk4Bw5ESFMxa3QIildzDSQ39B8TR5AgeS2QXZHFT0JEKypUJEpQEISJpKAckCAnQoBeSFyY5KCidBCdIQo0NaAlhJKW8sWgASovJC5AsIhNvIvokpTXDAoL00vQUi2CK7+avugXTQZyVFt/wDHd5K7atu+4HAn4rvz9kc3+TahKhCwXIV5911s5GkLU2MTUJxiIdBHxXoIriXaxZDTt5cMqtOm7zBuH/EdVF8Jnlq7DZycsgcOWZPxVisVK6Oe/NanQrQS2dg+Wa2rqi4OW7unpcWPZl0TBw9FnxMYeS09Os1ovE54YZxthazSWnn0jNKXCMiJP7KmMWyrfW+jEDmsRrVVKmsloqGXQzZ4gVtrJai4AnPbCrnLF8O8bXALIvMLcTju+aq+lbeWiGnxHL/ZV9tntD3mXkE++/Zuuq/HjvvVeW6eg9Vas0YmYPyC3N5ULs5tjoFJxB8Bggg+yQAP8le13Y3s8zOfUW8i8kSgKypzSnJoCcrRBrkgCdCRAqREpJQNcmp5SEKq0NQhKiWthLCfCWFjpcyEQnoUiO6i6pIRCCO6kLVLCQhQKTpcRXPJXDVZ00eTj8lVNPtisOIVm1Sd924fm+QXfe/HHPfc36EIWCxHLkOsLhpCpUFRt2pSdUp0XYw4A+y4bsviuvFct1qsz6ddzKZAvVC6SMIcbx9DCw58rJLHT6bHHK2VoNFG60jaBBnf9BOqPOU4x1WZbbF3dRxBkOAOGwxieo9UykwLjyvd24Ts1D7Q4El8nIBoj6Hmo9JaXLKTqjGVHNBALmANaDxLgXOyzugK01rMGs7xgBdk5uEwdoWitbyZh0DaHEAdCFaWTzEa6p2ulQr260VWX7r7jmyGmHYSQDIaCJhXHVuyTTF6Q4ATB2rCsVjfVdIdea3OMGmMhO34Kw6OoFsxiXH4qvJlLO0Wxlnyq2nLHUFaG4AtzJ8R5E4Ba7SOjHFrO6r3MfvGhxbmR4gW4uIE5kkq/WzRJqA3jDm5eeydi0Z0JWvd2LgdtbWJpujY4HJw4q3HlZFM5jfK49mllDHm65zgaYIvkuIJOLZOJ2LokLn2olJ1GoKTwZxxO0kGQOGC6Iu3j9rg5fcZCAE9Cvpns2EkJ6E0g0NRdTkJoNupbqVCnQS6iEqECQhKhBrUJJRKwbFQkvIlAqEkpC5DRyEy8i8oTpVdZGxVaeBW81Qd4XjiPgtJrL/Eb5rb6oOxeODfmu6fpOfL3LOhCFikhCqmtejQ9wfiCBgRiCcixw+fNWxYWlLIarC1ph2bSdh48FTkx6sdNOPPoy25rpGi4Ng5gQY4HZ1WrbUzW0tpqB1RtUi8HbDhEAbeIK01RhnBebfOnp4+GVSqE5GCsp+jmP8AG+6YxybGCwqIgyPresp9qwMHBN6TZvwwdKWoNc2izCXS8j3RjHUwpv8ArdnpODA7xjEy7Ldy81i6LphxfVdjeN0T7omfX4JlfQTHFwBwOeGPKSpklTbJ2TaS08BLr0A8c1g2rTz6pphwdMm6XbG3cuUwY4Jh1eaBj4gNrjEf8LG0nDWggg3fE2DI8MSOhKtJFLf2XzU2136zWnMFp6YH0K6YuOahVptlPj8hIXYgV2cHtcPqZ9ZUJJReWznKhNvBF8IHITb4Sd4ED0JhqJO8QSIUV9F8oJUKG+UqDAhF1OQsG2yXUXUqECXUXUqECXUQlSIbUvXq3tolhdtMeiNQNY6dSuaYIkskeRWl7aKf3TDuePUFVLswqxb6fEOHwXRhy/R0ss5329GXwi+FAw4JyrtCW+E19UBMlc+7UdPEU3Wak6DdmqRnwp/M8wgh03aqVV1R9F7ajb5BcwyJGY8iVoRUE4qzaF1VFHRNENE1LnfVDteaoDn84ER+lU6sS0lefzYay393p8GUuOvsy6joyWHaq/hMfRUb7YIgrEtNqaBvJ3LPVbbZNO3CmxocQAAJJMZ5pLXrCY+7aQ04AtYXOfxG4cSiw0GkeIY8dizKekxSBDrpG5wkK86dokaNtqrVYb3dQh0H7xzQADtgEnyhLpOxOowSPCWyR6EnitvU1kYJusbOWAPyWvr2p1bFwkugARjuAAWm58IykkWPs0s5fa2kZU2lx6QPUrrsqp9nOrRsVnmoPvapvOG1rfwU+YGJ4ngrYunjx6Zp5vLn1ZbCEIV2QQhCAQhCAQhCAQhCAQhCDEQm3kXlk20clhNvIlQaPSFMlJKk0kSJhSInTn3bIybMDuez4rnmoFW7b6HFxHUFdI7XKc2Nx3Fp9QuY6oUHi00qoabjHhznRDYjYdp5K+His8/L0tTyCS0V2Uxee5rRvcQ0dSqJpXX660toMjD26mJ8mD5lUXSmmalY3qtRzzsvHDyGQV9KOl6x6506TSyg6/UIgOHsN4/mPouX29969ecXF0yXYkk5k8VgvtPiz2bE+rWBCkdl7N9Li02Gnj46I7moNt5gABPNt0+a0WvOq7mXrRQaSwyajG5t3ubvbvGxU/s91jFitoY4xStJFN85Nqfy39TdPPgu65quWMymqvhncLuPO1cx8j8litfDgd2/ZuXXdZ+z6nXvPoEUnnEtiaTjy/DzHRcx03q/abGfvqZDcg8eJuOQvZeRgrnvFY65zTJPZHz7R+isqpYWvGLlXm2otG8bpiOX7FOp6UMxiPVYXju+zfHk7d2zZo9oO/4Lc6nPs/22k2o9rboc9odEFzcsdkEz5LT6G0ZaLc+5RvRhfquF1jAc5O0/lGfBZvatohtgqaPrUBDGtfRcdrnAh9528m89bcXFd7rDn5ZrWLtjXAiQZG8YpVxqw6cq0wKlKo5rXDIHAHa1wMg81YrBr/UZHfU21G+8zwu6ZH0XVpwbdDQtHo7WyyVhhVDT7tTwkfL1W6Y8OEggjeDI6hEnIQhQBCEIBCEIBCEkoFQhCDDuoupULJtskJYQhAQhCp+s2trqbzSoRLcHvImDubOGG9JLUW6W2rUa0S4ho3uIA9VX9I620achgNQ7xg3rmei5xb9M1Kji57y8/mM9N3kte62ytJhFOurNpzWR9oF14Zd927I4TOa0rrZvOS1FW1KE2kq8mlWXbLVxWqq2gnPZKWtUlYdR5AOBKDMs9WSslzlpdGWkSfEORwPQrMqVpw358tyBKniM9P3Xe+zTWQ22xtvma1GKdXeYHgqf1Ng8wVwO9irDqDrD9htrHuMUq0Uq3AOPgqf0u9C5B6JUNqszKjSx7Wua4Q5rgCCNxBzClalcYEnZvQcO7ROzqpZvv7CHOokw+hMuplxw7qfaZJ9nMbMMpezbUerU/wD0WoXWT4KJguJ9+ptaNzeu5N151lbpGoWU3TQpuIZue4YGqflw5rRauWh9kq36TjTO2PZcNzm5Ec965/zMd6ehh6TkuEu/Lv8AZLE2m0NY0NaMgBA6Kh9uVkvaNDoxp1mPHRwPpKtmrGn22umTg2oyBUYNk5OH5TB5QRsWB2k0O8sLwcg6mTyvBp/yWuV+ncc3HhfzZhl83TiuhLfDBtadn7cVsw6MjLT6Kp6Lll+mfwOc3pgFtKVrLP2V5dsMsdWyts4luKzLDpapSPge5v6SR8FoKNRziXuOPuD2Wj/2PHop+8wRC9WHXe0siXB43PA+IgqyWPX6g4sbUa6newvSCwO3E5gcVx9tcjJOtlq8BO7xdDP7oO+VNM0RnUb/AHBYlXWmzNzrM/uC4LbaLq9005c8gC4JJI3gbwm0dWLY7Kz1PMQqpdwq682NudZnVYVbtIsTf5s8gSuU0dR7c7+QRzICzKfZvbnfgaObkF9rdqdkGV88mlYNXtao/hpvPkB81W6XZXbDm+mOpWbQ7JKv4q7Ryagzj2tt/wBF3UITR2Q/989AhNDp6EwFErJtpIlUcoQ0wtP6Q7iz1KozAhv6nG634z5Ljte0mDOJJx4yuh9oVaKdOn7znOP9AAH+S5raagyOELTDwzy8satUJzho9Vra7ycR9cFJbHuneFhurYK6qQVJTHvWNTf4uBUk4oJHVE4rFc/FZbzh5IMW02ZkEkfPyCSyMgR9clHUfJx2YLKo4IElD2hwhJUKc0oO3dlOtZtdDuKpmtRF2Tm9gwa7nESt7rXVfUZ9npg+MfeOBghvuDidvDmuCat6XfZLUyqwxjdJ2Y4CeGMea9FWC0MrUm1WYhwmds7QeMqkvfTa4/TM5/1ci1o1FqWQd/QBNPNzQcW8eS0lAzDxyK7xpSs1lCo9wBDab3EHIwCYXDKVnAbMZyd+JxOfwyXN6iTG7j1/w7PLkxsy+Fo1YtD6FoZWaCWlvd1Gj8TCZ6gmR/urpr++dH1HNxBNIyN3esWg7OaDa1nvEAOZUezgRg4f5Kz6yWO/ZnUwMHloIGzGZHQLbGf+bg5Lr1O/tXnerTLbS87HuMHiIn1I6rJc3FWfWDQoGjKdrA8TbTJI92qe7I/uuKtvMq+Htjm9R+rl/umVKeR+vJOFQ5EhREGbw5QfZPDgeKRpkAxHA5hXYpg9FR2BG8EdVE8pne7ESyNV9MihVoVXTdp1GF0Zw13igcr3Vej7NaqVRrXsIcxwDmubkQciF5Rs7jL2j3iQOOceq6x2K6ec9tSxvPsDvaU7GzFRg4AkHzKrl2THWu+CQ1wseEsLPrq/TE32jgkNoUcJITqp0xJ9oKRNQnVTph0JUIVVghCJjyUjn/aFbA97abf5Mkne5wEt5AAeZVA0lTDhIzW8t9q7173+85zuplV+2G6eC2nhjWnNtcw3SmVKjXcFNbxfWmcS0wVIyaxjI8VMx8iVgl6ksb8CN2CCfastjsFhgrJYUEdpp4yPPkik5S1CsYi7yPoUD6jkgcmOKY129BNVxC612V6zS0UXnB5jH8NUD0DoHnzXIxithq9a+7q3ZgPw/qGX7dFly7k6p8Ov0lxuV48vGX9/DvevVou2KqPfus/uIn0BXLqowjgt9prTxtFlpU3/AMRtTxH3gGG67nvVfcVx83JMrLHueg9PlxYWZed1ZezTSzadV9mdh3jrzHbL90As8wBHIro+k/4TzuaT0xXAhVuVJkgkiCMwRkRxBhdp1b0yLZZC8xfaHMqge8G58iCD5rfgz3OmvP8AX8HTn+ZPFvdWaNj+0aEtFIZ3K139TD3jfUBcls9W8xp4Bdt7O3h1mfTP4ahB5PaD+64lVoGi+pR/0qtWn5Me5o9AtuK7wjg9XNc2U/c6U2qQBPJNJUdd2C0cxznJlQ4Smh6jqvwRLWl8PcRvBVz1A0mKduoVMiXd28jaKnh+JHRUeq7xO5D5rZav2oNqCcMiDuIMhRfBPL1FeRKbScHtDh+IB3USnwsG5JRKUBLCBqE6EIjZ6VRhKidH3lrNZbZ3VlqvGd26Ob/CPjPks+FVO0aoW2djZ9qp8Gn91bHyjLw5vUqXcdi1ulK4IgJ+kWOHJaerVg71sxHeEFR2imHjilrOkYZrXPtRBgoEqNLcCo6L4d6qR1YOWJMOHmg21FylZUWEx6ma5BlOKa/FNL028gicCMPqE0KWsJHwUAMoJ2lD5zGYxB4jJRynByC/WZ4qUqdQezUbI4OBh7Dxa4EcoO1NeFXtXdKmm00DiHVG1GH3XXS2oOTmhnmwKxVsQHD6C8zmw6M/2r6v0HqLzcMt8zs1FubjKsWpWsH2a0+MxSqtuVJyB/A/yJg8Cq/a1jU6ZM8lON13Ry4TOXG/LrHZxVjvmbyx3o4fILmmv9n7rSdrbsdUbUHKpTY4/wDkXLovZ66KlUcGfFwVQ7YqN3SAd79mpnza6o2fQLr4Lvjjw/xGa9Rl/H9KaFDXOHn81JSOShtjoHmFtHCiDlHWdhwTnFY1Z8clIw6p8Xl81lWYDzWE8+LyUweoo9O6l2k1bBZXkyTRYCeLfCfgt0VzfsX0+2pZHWZx8dB5IG+nUN4EcnXh0XQTamrCtZ4TohYptrd6jdpFu8KNxOmekWu/6m3eEqjcTps0IQroC5v2q23x06Xusvebyf8A5QhWx8q5eFFo2i8IPVRWiwNeMMEIWrKtJpCh3W1YDiH5pEIlh12FnJRl+IPFIhBnMcpWOQhBLKc1CECuKhqYY9eSEIGlyVpQhBIHwQRsII8jgrto203mjc4SPPNCFyernaV7P4RlerKIrXSh3DMKKm2ChC5Z4ezlPqW/VLSPdW6lTOVdtVn9bAKjT0a8eawu28AWizHaaD55B4j/ACKELt9P7Hzv4n+vf4c1FeFFa68gcwUqFu89CbThl1P7LGfUnYPj8UIQYdap4isikD1QhSLf2fvfQtbSDAqtcwxyvA9W+q6h3zz+IoQuL1F1k6OKbhQHHaeqe2zuP/KELDdaHfZHcEIQmzT/2Q==",
        name: "AGUINALDO JAIME",
      },
      {
        id: 2,
        name: "MIGUEL RELVAS",
        description:
          "É um político português e antigo governante do Partido Social Democrata. Foi deputado durante mais de 20 anos, desempenhou funções de Secretário de Estado da Administração Local durante o XV Governo. É licenciado em Ciência Política e Relações Internacionais pela Universidade Lusófona. ",
        imgUrl:
          "https://www.fpb.pt/wp-content/uploads/2012/02/29757543842742240568.jpg",
      },
    ],
    certificate: "INEFOP",
    candidacy: `Com uma taxa de aprovação de 100% nas candidaturas, asseguramos que seus objetivos sejam plenamente alcançados, independentemente da sua localização. Estamos presentes em todo o território nacional.
Analisamos o cumprimento dos requisitos prévios, elaboramos e submetemos a sua candidatura, disponibilizando também, se necessário, a formação adicional legalmente requerida.`,
    modality: "Presencial",
    country: "Angola",
    startDate: "16 de Março de 2026",
    locale: "Luanda",
    description: `A Gestão Estratégica é o processo de gerir todos os recursos de uma organização para alcançar objetivos e metas. Representa a forma de envolver todas as funções organizacionais de uma empresa com foco em ações estratégicas que percorrem toda a estrutura funcional, de modo a alcançar a maior racionalidade e eficácia possível, maximizar os resultados e tornar a empresa mais competitiva.
    Este programa é oferecido pela Global Academy. Foi concebido com um ciclo de sessões sobre temas da atualidade e de relevância para líderes de organizações governamentais e empresariais.
    O programa proporciona aos gestores de topo uma experiência única, que visa desenvolver nos líderes habilidades, visão global e sistêmica, além de uma cultura empresarial competitiva.
    Este programa oferece competências a 360 graus, combinando teoria e prática na gestão das organizações, com foco na análise do ambiente interno e externo, na competitividade organizacional, na avaliação de estratégias, bem como na implantação e no acompanhamento dos processos.`,
    language: "Português",
    certificateImgUrls: "/inefop.png",
    modules: [
      "ECONOMIC SCENARIO AND WORLD TRENDS",
      "STRATEGIC BUSINESS MANAGEMENT",
      `ARTIFICIAL INTELLIGENCE,
CYBER ​​SECURITY AND INNOVATION.`,
      `LEADERSHIP AND PEOPLE MANAGEMENT IN COMPETITIVE ENVIRONMENTS.`,
      "ENTREPRENEURSHIP AND BUSINESS DEVELOPMENT.",
      `ESG STRATEGIES.`,
    ],
    recipients: `O Programa Executivo Master foi criado para oferecer suporte aos Líderes Top 20 do Mercado Angolano, de modo que mantenham suas organizações competitivas em seus respectivos segmentos de negócios. Baseia-se na experiência dos seus promotores e oradores e foi desenhado como uma ferramenta de troca de experiências e intercâmbio, permitindo que os líderes compartilhem aprendizado entre si.
    São elegíveis para participar empresários, executivos, consultores, professores universitários e todos os interessados que atendam aos requisitos.`,
  },
  {
    id: 2,
    coverImg:
      "https://global-services-corporation.github.io/images/academy/financa-corporativa.jpg",
    title: "Programa Executivo sobre Finança Corporativa",
    workload: "30h",
    certificate: "INEFOP",
    modality: "Presencial",
    country: "Angola",
    startDate: "16 de Março de 2026",
    locale: "Luanda",
    description: `Este programa executivo oferece uma compreensão profunda da gestão financeira corporativa, abordando temas como análise de investimentos, avaliação de empresas e estrutura de capital. Destinado a líderes que buscam maximizar o valor da empresa através de práticas financeiras eficazes.`,
    language: "Português",
  },
  {
    id: 3,
    coverImg:
      "https://global-services-corporation.github.io/images/academy/lideranca-executiva.jpg",
    title: "Liderança Executiva",
    workload: "15h",
    certificate: "INEFOP",
    modality: "Presencial",
    country: "Angola",
    startDate: "16 de Março de 2026",
    locale: "Luanda",
    description: `O curso de Liderança Executiva proporciona as habilidades necessárias para liderar equipes de alta performance, com foco em comunicação eficaz, tomada de decisões e gestão de mudanças organizacionais. Ideal para líderes que querem melhorar sua capacidade de liderar em tempos de transformação.`,
    language: "Português",
  },
  {
    id: 4,
    coverImg:
      "https://global-services-corporation.github.io/images/academy/inteligencia-emocional-empatia.jpg",
    title: "Inteligência Emocional e Empatia",
    workload: "15h",
    certificate: "INEFOP",
    modality: "Presencial",
    country: "Angola",
    startDate: "16 de Março de 2026",
    locale: "Luanda",
    description: `Neste curso, você aprenderá a importância da inteligência emocional na gestão de equipes e relações profissionais. Desenvolver empatia e habilidades interpessoais é fundamental para criar um ambiente de trabalho harmonioso e produtivo.`,
    language: "Português",
  },
  {
    id: 5,
    coverImg:
      "https://global-services-corporation.github.io/images/academy/coaching-mentoria.jpg",
    title: "Coaching e Mentoria",
    workload: "10h",
    certificate: "INEFOP",
    modality: "Presencial",
    country: "Angola",
    startDate: "16 de Março de 2026",
    locale: "Luanda",
    description: `Este programa visa desenvolver competências de coaching e mentoria para apoiar o crescimento profissional de indivíduos e equipes. Você aprenderá como ajudar outros a alcançar seu pleno potencial e superar desafios no ambiente corporativo.`,
    language: "Português",
  },
  {
    id: 6,
    teaching: [
      { id: 1, imgUrl: "", name: "Fernando Lumaca", description: "" },
      { id: 2, imgUrl: "", name: "Áureo Sebastião", description: "" },
    ],
    modules: [
      `GESTÃO DA
PREVENÇÃO DE
RISCOS
PROFISSIONAIS
(RP) FUNDAMENTAIS
`,
      `PSICOSSOCIOLOGIA DO
TRABALHO`,
      `Segurança do
trabalho`,
      `EXPOSIÇÃO A
AGENTES
QUÍMICOS`,
      `Obrigações
legais`,
      `Auditorias e
inspeções`,
      `Procediment
os de
Emergência e
Evacuação
`,
      `Primeiros
socorros`,
      `Higiene e
saúde no
trabalho`,
    ],
    coverImg:
      "https://global-services-corporation.github.io/images/academy/higiene-seguranca.jpg",
    title: "Higiene, Segurança e Saúde no Trabalho",
    workload: "30h",

    certificateImgUrls: "/inefop.png",

    certificate: "INEFOP",
    modality: "Presencial e Online",
    country: "Angola",
    startDate: "16 de Março de 2026",
    locale: "Luanda",
    description: `Higiene e segurança no trabalho
referem-se às práticas e condições
destinadas a assegurar a saúde e a
integridade física dos trabalhadores no
ambiente de trabalho. Essas práticas são
divididas em duas categorias: Higiene no
trabalho e Segurança no trabalho.
Este curso tem como objetivo transmitir
conhecimentos teóricos e práticos
relacionados à SHST, permitindo aos
participantes aprimorar suas
habilidades como técnicos de SHST e
melhorar as condições gerais de
trabalho na empresa. Dessa forma,
contribui para o desenvolvimento de
uma cultura de prevenção que promove
a melhoria qualitativa das condições de
trabalho em geral e o cumprimento da
legislação nacional. E tem como objetivo
geral adquirir competências básicas na
área de HST que permitam o
desempenho de funções de prevenção e
de protecção contra riscos profissionais,
enquadramento jurídico da shst e
conceitos fundamentais no âmbito das
acções consagradas na lei.
Nessa perspectiva serão valorizadas
essencialmente as práticas preventivas e
de autocuidado. Veremos diversos
temas como acidente do trabalho,
causas, inspeção, riscos ambientais,
físicos, químicos, biológicos,
ergonômicos e de acidente, doenças
profissionais, Equipamentos de
Proteção Individual – EPI, Comissão
Interna de Prevenção de Acidentes –
CIPA, técnicas de análise e avaliação de
riscos, entre outros assuntos
importantes no âmbito da segurança do
trabalho. `,
    language: "Português",
    recipients: `São gestores, técnicos de
SHST e funcionários seniores que no
âmbito geral o qual tenham
desenvolvido as suas actividades
simultaneamente nas zonas de
operações da empresa. (Directores,
Gestores, Supervisores, Técnicos,
Mecânicos, Operadores de Máquinas),
etc.
`,
  },
  {
    id: 7,
    coverImg:
      "https://global-services-corporation.github.io/images/academy/gestao-de-pessoas.jpg",
    title: "Gestão de Pessoas para Líderes Emergentes",
    workload: "10h",
    certificate: "INEFOP",
    modality: "Presencial",
    country: "Angola",
    startDate: "16 de Março de 2026",
    locale: "Luanda",
    description: `O curso de Gestão de Pessoas para Líderes Emergentes capacita novos líderes a gerenciar equipes eficazmente, com foco em habilidades de comunicação, motivação e gestão de conflitos. Ideal para aqueles que estão assumindo posições de liderança pela primeira vez.`,
    language: "Português",
  },
  {
    id: 8,
    coverImg:
      "https://global-services-corporation.github.io/images/academy/corporate-governance.jpg",
    title: "Corporate Governance",
    workload: "15h",
    certificate: "INEFOP",
    modality: "Presencial",
    country: "Angola",
    startDate: "16 de Março de 2026",
    locale: "Luanda",
    description: `Este curso oferece uma compreensão das melhores práticas de governança corporativa, explorando temas como ética, compliance e responsabilidade corporativa. Essencial para aqueles que desejam garantir que as empresas sejam administradas com transparência e responsabilidade.`,
    language: "Português",
  },
  {
    id: 9,
    coverImg:
      "https://global-services-corporation.github.io/images/academy/liderando-equipes-hibridas.jpg",
    title: "Masterclass Avançada - Liderando Equipes Híbridas",
    workload: "22h",
    certificate: "INEFOP",
    modality: "Presencial",
    country: "Angola",
    startDate: "16 de Março de 2026",
    locale: "Luanda",
    description: `Esta masterclass aborda os desafios e as melhores práticas para liderar equipes híbridas, combinando membros presenciais e remotos. Você aprenderá a adaptar sua liderança a diferentes contextos de trabalho, garantindo a produtividade e o engajamento de todos os membros.`,
    language: "Português",
  },
  {
    id: 10,
    coverImg:
      "https://global-services-corporation.github.io/images/academy/gestao-estrategica.jpg",
    title: "Masterclass Avançada- Gestão Estratégica de Marketing",
    workload: "10h",
    certificate: "INEFOP",
    modality: "Presencial",
    country: "Angola",
    startDate: "16 de Março de 2026",
    locale: "Luanda",
    description: `Esta masterclass oferece uma visão aprofundada da gestão estratégica de marketing, abordando temas como segmentação de mercado, branding e estratégias digitais. Ideal para profissionais que buscam impulsionar a marca e alcançar resultados eficazes através do marketing.`,
    language: "Português",
  },
  {
    id: 11,
    coverImg:
      "https://global-services-corporation.github.io/images/academy/transformacao-digital.jpg",
    title: "Liderar a Transformação Digital e IA",
    workload: "12h",
    certificate: "INEFOP",
    modality: "Presencial",
    country: "Angola",
    startDate: "16 de Março de 2026",
    locale: "Luanda",
    description: `Este curso aborda a transformação digital e o impacto da inteligência artificial nas empresas. Você aprenderá como implementar tecnologias inovadoras para otimizar processos e criar um ambiente digital que favoreça a inovação e o crescimento sustentável.`,
    language: "Português",
  },
];
