const bemHelper = (block: string) => (element: string = '', modifiers: string[] = []): { className: string } => {
  const elem = element ? `${block}__${element}` : block
  const className = modifiers.length > 0
    ? `${elem} ${modifiers.map(m => `${elem}-${m}`).join(' ')}`
    : elem
  return { className }
}

export default bemHelper
