type Props = {
  callback: () => void
}

export const Remove = (props: Props) => {
  return (
    <svg
      fill={'none'}
      height={'15'}
      onClick={props.callback}
      viewBox={'0 0 512 512'}
      width={'15'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <g clipPath={'url(#clip0_4_15)'}>
        <path
          d={
            'M362.667 85.3333V42.6667C362.667 19.136 343.531 0 320 0H192C168.469 0 149.333 19.136 149.333 42.6667V85.3333H21.3333V128H56.4053L92.736 455.061C94.4649 470.721 101.913 485.192 113.653 495.699C125.392 506.207 140.597 512.011 156.352 512H354.837C370.593 512.02 385.8 506.218 397.538 495.708C409.276 485.199 416.717 470.723 418.432 455.061L454.763 128H490.645V85.3333H362.667ZM192 42.6667H320V85.3333H192V42.6667ZM340.416 352.917L310.251 383.083L256 328.832L201.749 383.083L171.584 352.917L225.835 298.667L171.584 244.416L201.749 214.251L256 268.501L310.251 214.251L340.416 244.416L286.165 298.667L340.416 352.917Z'
          }
          fill={'black'}
        />
      </g>
      <defs>
        <clipPath id={'clip0_4_15'}>
          <rect fill={'white'} height={'512'} width={'512'} />
        </clipPath>
      </defs>
    </svg>
  )
}
