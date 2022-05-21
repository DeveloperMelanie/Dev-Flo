import Image from 'next/image'
import { useMemo, useRef, useState } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'
import Link from 'next/link'
import axios from 'axios'
import { formatDate } from 'utils'

const AutocompleteItem = ({
    attributes: { slug, title, image, date, time },
}) => {
    return (
        <li>
            <Link href={`/${slug}`}>
                <a className='hover:bg-blue-200 flex gap-4 p-4'>
                    <div className='relative min-w-[5rem] h-16'>
                        <Image
                            src={image.data.attributes.url}
                            layout='fill'
                            objectFit='cover'
                            quality={100}
                            alt={title}
                        />
                    </div>
                    <div>
                        <h3 className='text-base font-semibold mb-2'>
                            {title}
                        </h3>
                        <p className='uppercase text-gray-500 text-sm font-semibold'>
                            {formatDate(date)} - {time} minutos de lectura
                        </p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default function Search(props) {
    const [autocompleteState, setAutocompleteState] = useState({
        collections: [],
        isOpen: false,
    })

    const autocomplete = useMemo(
        () =>
            createAutocomplete({
                placeholder: 'Buscar artículos',
                onStateChange: ({ state }) => setAutocompleteState(state),
                getSources: () => [
                    {
                        sourceId: 'articles',
                        getItems: async ({ query }) => {
                            if (query) {
                                const { data } = await axios.get(
                                    `/api/search?q=${query}`
                                )
                                return data.data
                            }
                        },
                    },
                ],
                ...props,
            }),
        [props]
    )

    const formRef = useRef(null)
    const inputRef = useRef(null)
    const panelRef = useRef(null)

    const formProps = autocomplete.getFormProps({
        inputElement: inputRef.current,
    })
    const inputProps = autocomplete.getInputProps({
        inputElement: inputRef.current,
    })

    return (
        <>
            <div className='fixed top-0 left-0 w-full h-screen bg-black opacity-20 z-10' />
            <form
                ref={formRef}
                className='fixed top-0 left-0 w-full h-screen flex justify-center items-start pt-32 pb-16 overflow-y-auto z-50'
                {...formProps}
            >
                <div className='flex-1 max-w-lg relative px-4' id='input'>
                    <input
                        ref={inputRef}
                        className={`h-12 w-full pl-4 pr-4 text-gray-800 placeholder-gray-400 outline-none shadow-2xl bg-white rounded-xl${
                            autocompleteState.isOpen ? ' rounded-b-none' : ''
                        }`}
                        {...inputProps}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                e.preventDefault()
                            }
                        }}
                    />
                    {autocompleteState.isOpen && (
                        <div
                            className='relative z-20 w-full border border-gray-100 bg-white rounded-lg rounded-t-none shadow-lg'
                            ref={panelRef}
                            {...autocomplete.getPanelProps()}
                        >
                            {autocompleteState.collections.map(
                                (collection, index) => {
                                    const { items } = collection

                                    return (
                                        <section key={`section-${index}`}>
                                            {items.length > 0 && (
                                                <ul
                                                    {...autocomplete.getListProps()}
                                                >
                                                    {items.map(item => (
                                                        <AutocompleteItem
                                                            key={item.id}
                                                            {...item}
                                                        />
                                                    ))}
                                                </ul>
                                            )}
                                        </section>
                                    )
                                }
                            )}
                        </div>
                    )}
                </div>
            </form>
        </>
    )
}
