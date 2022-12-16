import { useCart } from 'hooks/useCart'
import { useFormContext } from 'react-hook-form'
import { FormContainer, InputContainer, Input, InputBlock } from './styles'

export function CompleteOrderForm() {
    const { register, formState } = useFormContext()
    const { totalItems } = useCart()

    const isDisableField = totalItems === 0

    return (
        <FormContainer>
            <InputBlock>
                <Input
                    type="number"
                    placeholder="CEP"
                    min={0}
                    error={!!formState.errors.zipcode}
                    disabled={isDisableField}
                    {...register('zipcode', { valueAsNumber: true, required: true })}
                />
            </InputBlock>
            <Input
                placeholder="Rua"
                error={!!formState.errors.street}
                disabled={isDisableField}
                {...register('street', { required: true })}
            />
            <InputContainer>
                <InputBlock>
                    <Input
                        type="number"
                        placeholder="Número"
                        min={0}
                        error={!!formState.errors.number}
                        disabled={isDisableField}
                        {...register('number', { valueAsNumber: true, required: true })}
                    />
                </InputBlock>
                <InputBlock className="optional">
                    <Input
                        placeholder="Complemento"
                        error={!!formState.errors.complement}
                        disabled={isDisableField}
                        {...register('complement')}
                    />
                </InputBlock>
            </InputContainer>

            <InputContainer>
                <InputBlock>
                    <Input
                        placeholder="Bairro"
                        error={!!formState.errors.district}
                        disabled={isDisableField}
                        {...register('district', { required: true })}
                    />
                </InputBlock>
                <InputBlock className="city">
                    <Input
                        placeholder="Cidade"
                        error={!!formState.errors.city}
                        disabled={isDisableField}
                        {...register('city', { required: true })}
                    />
                </InputBlock>
                <InputBlock className="uf">
                    <Input
                        placeholder="UF"
                        error={!!formState.errors.uf}
                        disabled={isDisableField}
                        {...register('uf', { required: true })}
                    />
                </InputBlock>
            </InputContainer>
        </FormContainer>
    )
}