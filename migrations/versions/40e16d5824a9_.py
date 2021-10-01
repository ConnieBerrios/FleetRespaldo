"""empty message

Revision ID: 40e16d5824a9
Revises: 3d9598f2bcf4
Create Date: 2021-10-01 12:50:33.868558

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '40e16d5824a9'
down_revision = '3d9598f2bcf4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'encomiendas', ['id_package'])
    op.add_column('perfilvendedor', sa.Column('lat', sa.Integer(), nullable=True))
    op.add_column('perfilvendedor', sa.Column('lng', sa.Integer(), nullable=True))
    op.create_unique_constraint(None, 'perfilvendedor', ['lng'])
    op.create_unique_constraint(None, 'perfilvendedor', ['lat'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'perfilvendedor', type_='unique')
    op.drop_constraint(None, 'perfilvendedor', type_='unique')
    op.drop_column('perfilvendedor', 'lng')
    op.drop_column('perfilvendedor', 'lat')
    op.drop_constraint(None, 'encomiendas', type_='unique')
    # ### end Alembic commands ###
