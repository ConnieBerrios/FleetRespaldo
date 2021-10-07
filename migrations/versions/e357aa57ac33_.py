"""empty message

Revision ID: 37f803016fd6
Revises: 
Create Date: 2021-10-06 01:07:52.607915

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '37f803016fd6'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('perfiltransportista',
    sa.Column('id_transport2', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('lastName', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=50), nullable=False),
    sa.Column('password', sa.String(length=50), nullable=False),
    sa.Column('rut', sa.String(length=50), nullable=False),
    sa.Column('transAddress', sa.String(length=50), nullable=False),
    sa.Column('phone', sa.String(length=50), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id_transport2'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('phone'),
    sa.UniqueConstraint('rut')
    )
    op.create_table('perfilvendedor',
    sa.Column('id_vendor', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('lastName', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=50), nullable=False),
    sa.Column('password', sa.String(length=50), nullable=False),
    sa.Column('rut', sa.String(length=50), nullable=False),
    sa.Column('initialAddress', sa.String(length=50), nullable=True),
    sa.Column('phone', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id_vendor'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('initialAddress'),
    sa.UniqueConstraint('phone'),
    sa.UniqueConstraint('rut')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('encomiendas',
    sa.Column('id_package', sa.Integer(), nullable=False),
    sa.Column('status', sa.String(length=50), nullable=False),
    sa.Column('destinationAddress', sa.String(length=50), nullable=True),
    sa.Column('originAddress', sa.String(length=50), nullable=False),
    sa.Column('zone', sa.String(length=50), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['originAddress'], ['perfilvendedor.initialAddress'], ),
    sa.PrimaryKeyConstraint('id_package'),
    sa.UniqueConstraint('destinationAddress'),
    sa.UniqueConstraint('id_package'),
    sa.UniqueConstraint('is_active'),
    sa.UniqueConstraint('originAddress'),
    sa.UniqueConstraint('status'),
    sa.UniqueConstraint('zone')
    )
    op.create_table('pedidoaceptado',
    sa.Column('id_pedido', sa.Integer(), nullable=False),
    sa.Column('id_package', sa.Integer(), nullable=True),
    sa.Column('status', sa.String(length=50), nullable=False),
    sa.Column('destinationAddress', sa.String(length=50), nullable=True),
    sa.Column('originAddress', sa.String(length=50), nullable=False),
    sa.Column('zone', sa.String(length=50), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['destinationAddress'], ['encomiendas.destinationAddress'], ),
    sa.ForeignKeyConstraint(['id_package'], ['encomiendas.id_package'], ),
    sa.ForeignKeyConstraint(['originAddress'], ['encomiendas.originAddress'], ),
    sa.ForeignKeyConstraint(['status'], ['encomiendas.status'], ),
    sa.ForeignKeyConstraint(['zone'], ['encomiendas.zone'], ),
    sa.PrimaryKeyConstraint('id_pedido'),
    sa.UniqueConstraint('destinationAddress'),
    sa.UniqueConstraint('id_package'),
    sa.UniqueConstraint('originAddress'),
    sa.UniqueConstraint('status')
    )
    op.create_table('tarifas',
    sa.Column('id_fee', sa.Integer(), nullable=False),
    sa.Column('price', sa.String(length=50), nullable=False),
    sa.Column('destinationAddress', sa.String(length=50), nullable=False),
    sa.Column('originAddress', sa.String(length=50), nullable=False),
    sa.Column('zone', sa.String(length=50), nullable=False),
    sa.Column('zoneDestino', sa.String(length=50), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('phone', sa.String(length=50), nullable=False),
    sa.ForeignKeyConstraint(['destinationAddress'], ['encomiendas.destinationAddress'], ),
    sa.ForeignKeyConstraint(['originAddress'], ['encomiendas.originAddress'], ),
    sa.ForeignKeyConstraint(['phone'], ['perfiltransportista.phone'], ),
    sa.ForeignKeyConstraint(['zone'], ['encomiendas.zone'], ),
    sa.PrimaryKeyConstraint('id_fee'),
    sa.UniqueConstraint('destinationAddress'),
    sa.UniqueConstraint('originAddress'),
    sa.UniqueConstraint('phone'),
    sa.UniqueConstraint('zone'),
    sa.UniqueConstraint('zoneDestino')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tarifas')
    op.drop_table('pedidoaceptado')
    op.drop_table('encomiendas')
    op.drop_table('user')
    op.drop_table('perfilvendedor')
    op.drop_table('perfiltransportista')
    # ### end Alembic commands ###
