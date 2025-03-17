export function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "center",
        })
    } else {
        console.error(`Seção com ID ${sectionId} não encontrada.`)
    }
}
