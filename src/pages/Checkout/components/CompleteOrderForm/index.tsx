import { useFormContext } from 'react-hook-form'
import { FormContainer, InputContainer, Input, InputBlock } from './styles'

export function CompleteOrderForm() {
    const { register, watch, formState } = useFormContext()

    console.log(formState.errors)


    return (
        <FormContainer>
            <InputBlock>
                <Input
                    type="number"
                    placeholder="CEP"
                    min={0}
                    error={!!formState.errors.zipcode}
                    {...register('zipcode', { valueAsNumber: true, required: true })}
                />
            </InputBlock>
            <Input
                placeholder="Rua"
                error={!!formState.errors.street}
                {...register('street', { required: true })}
            />
            <InputContainer>
                <InputBlock>
                    <Input
                        type="number"
                        placeholder="Número"
                        min={0}
                        error={!!formState.errors.number}
                        {...register('number', { valueAsNumber: true, required: true })}
                    />
                </InputBlock>
                <InputBlock className="optional">
                    <Input
                        placeholder="Complemento"
                        error={!!formState.errors.complement}
                        {...register('complement')}
                    />
                </InputBlock>
            </InputContainer>

            <InputContainer>
                <InputBlock>
                    <Input
                        placeholder="Bairro"
                        error={!!formState.errors.district}
                        {...register('district', { required: true })}
                    />
                </InputBlock>
                <InputBlock className="city">
                    <Input
                        placeholder="Cidade"
                        error={!!formState.errors.city}
                        {...register('city', { required: true })}
                    />
                </InputBlock>
                <InputBlock className="uf">
                    <Input
                        placeholder="UF"
                        error={!!formState.errors.uf}
                        {...register('uf', { required: true })}
                    />
                </InputBlock>
            </InputContainer>
        </FormContainer>
    )
}