import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from './footer.tsx'

const meta: Meta<typeof Footer> = {
  component: Footer
}

export default meta
type Story = StoryObj<typeof Footer>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    children: '©Footer'
  }
}
