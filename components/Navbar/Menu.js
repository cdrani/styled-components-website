import styled from 'styled-components'
import rem from 'polished/lib/helpers/rem'
import Link from '../Link'

import { pages } from '../../pages/docs.json'
import { greyText } from '../../utils/colors'

const MenuWrapper = styled.aside`
  display: block;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    height: ${p => p.isFolded ? '0' : `calc(100vh - ${rem(70)})`};
    transition: height .3s ease-in-out;
    overflow-y: scroll;
  }
`

const Section = styled.div`
  margin-bottom: ${rem(30)};
`

const SectionTitle = styled.h4`
  display: block;
  margin: ${rem(10)} ${rem(40)};
  font-weight: normal;
`

const PageLink = styled(Link)`
  display: block;
  margin: ${rem(10)} ${rem(40)} ${rem(10)} ${rem(55)};
  opacity: 0.8;
  font-size: 0.9rem;
`

const Menu = ({ isFolded }) => (
  <MenuWrapper isFolded={isFolded}>
    {
      pages.map(({ title, pathname, sections }) => (
        <Section key={title}>
          <SectionTitle>
            {title}
          </SectionTitle>

          {
            sections.map(({ title, pathname: subPathname }) => (
              <PageLink key={title} href={`/docs/${pathname}/${subPathname}`}>
                {title}
              </PageLink>
            ))
          }
        </Section>
      ))
    }
  </MenuWrapper>
)

export default Menu