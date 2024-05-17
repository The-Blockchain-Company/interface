import { InterfaceElementName } from '@uniswap/analytics-events'
import { DollarSign, Terminal } from 'react-feather'
import styled from 'styled-components/macro'
import { lightTheme } from 'theme/colors'

import darkArrowImgSrc from './images/aboutArrowDark.png'
import lightArrowImgSrc from './images/aboutArrowLight.png'
import darkDollarImgSrc from './images/aboutDollarDark.png'
import darkTerminalImgSrc from './images/aboutTerminalDark.png'
import nftCardImgSrc from './images/nftCard.png'
import swapCardImgSrc from './images/swapCard.png'

export const MAIN_CARDS = [
  {
    to: '/swap',
    title: 'Swap tokens',
    description: 'Help us turn this demo into reality! Buy our token to help deploy our smart contracts!',
    cta: 'Trade Tokens',
    darkBackgroundImgSrc: swapCardImgSrc,
    lightBackgroundImgSrc: swapCardImgSrc,
    elementName: InterfaceElementName.ABOUT_PAGE_SWAP_CARD,
  },
  {
    to: '/nfts',
    title: 'Trade NFTs',
    description: 'Buy and sell NFTs across marketplaces to find more listings at better prices.',
    cta: 'Explore NFTs',
    darkBackgroundImgSrc: nftCardImgSrc,
    lightBackgroundImgSrc: nftCardImgSrc,
    elementName: InterfaceElementName.ABOUT_PAGE_NFTS_CARD,
  },
]

const StyledCardLogo = styled.img`
  min-width: 20px;
  min-height: 20px;
  max-height: 48px;
  max-width: 48px;
`
//#TODO add moonpay howto URL
export const MORE_CARDS = [
  {
    to: '#',
    external: true,
    title: 'Buy crypto',
    description: 'Buy crypto with your credit card or bank account at the best rates.',
    lightIcon: <DollarSign color={lightTheme.textTertiary} size={48} />,
    darkIcon: <StyledCardLogo src={darkDollarImgSrc} alt="Earn" />,
    cta: 'Buy now',
    elementName: InterfaceElementName.ABOUT_PAGE_BUY_CRYPTO_CARD,
  },
  {
    to: '/pools',
    title: 'Earn',
    description: 'Provide liquidity to pools on ONE and earn fees on swaps.',
    lightIcon: <StyledCardLogo src={lightArrowImgSrc} alt="Analytics" />,
    darkIcon: <StyledCardLogo src={darkArrowImgSrc} alt="Analytics" />,
    cta: 'Provide liquidity',
    elementName: InterfaceElementName.ABOUT_PAGE_EARN_CARD,
  },
  {
    to: 'https://quantumone.io',
    external: true,
    title: 'Built by Quantum One DAO',
    description: 'Join us in building a quantum and photonic powered future',
    lightIcon: <Terminal color={lightTheme.textTertiary} size={48} />,
    darkIcon: <StyledCardLogo src={darkTerminalImgSrc} alt="Developers" />,
    cta: 'Join Quantum One',
    elementName: InterfaceElementName.ABOUT_PAGE_DEV_DOCS_CARD,
  },
]
